export const FETCH_HOME_DATA = 'fetch_home_data';

export const fetchHomeData = async (dispatch) => {
  
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        articles: [
          {
            id: 1,
            title: '文章1',
            content: '文章内容1'
          },
          {
            id: 2,
            title: '文章2',
            content: '文章内容2'
          }
        ]
      })
    }, 2000)
  })

  dispatch({
    type: FETCH_HOME_DATA,
    payload: data
  })
}

