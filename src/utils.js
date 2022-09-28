const fetchData = async (url, attr) => {
  const d = await(await fetch(url))
  .json()
  .catch(e => {
    console.error(e);
  });

  return attr ? d[attr] : d;
}

export {
  fetchData,
}