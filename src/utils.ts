const fetchData = async (url, attr) => {
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