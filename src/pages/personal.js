import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { fetchPersonalData } from "../store/actions/personal";

const Personal = () => {
  const dispatch = useDispatch()
  const personalData = useSelector((state) => state.personal)

  useEffect(() => {
    dispatch(fetchPersonalData)
  }, [])

  const renderHead = () => (
    <Helmet>
      <title>个人中心</title>
    </Helmet>
  )

  return (
    <div>
      {renderHead()}
      <h1>个人中心</h1>
      <div>我是：{personalData.userInfo?.name}</div>
    </div>
  )
}

Personal.getInitialData = async (store) => {
  return store.dispatch(fetchPersonalData)
}

export default Personal;