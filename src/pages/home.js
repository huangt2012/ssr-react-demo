import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeData } from "../store/actions/home";

const Home = () => {
  const dispatch = useDispatch()
  const homeData = useSelector((state) => state.home);

  console.log(homeData)

  const handleClick = () => {
    console.log('我被点击了')
  }

  useEffect(() => {
    dispatch(fetchHomeData)
  }, [])

  const renderHead = () => (
    <Helmet>
      <title>主页</title>
    </Helmet>
  )

  return (
    <div>
      {renderHead()}
      <ul>
        {homeData.articles?.map((item) => (
          <li key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
      我是首页 <button onClick={handleClick}>点击</button>
    </div>
  )
}

Home.getInitialData = async (store) => {
  return store.dispatch(fetchHomeData)
}

export default Home;