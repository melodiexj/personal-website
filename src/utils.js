const fetchData = async (url, attr) => {
  // const d = await(await fetch(url))
  // .json()
  // .catch(e => {
  //   console.error(e);
  // });

  // return attr ? d[attr] : d;

  return await fetch("/" + url)
  .then((response) => response.json())
  .then((data) => data[attr])
  .catch(e => {
    console.error(e);
  });
}

export {
  fetchData,
}