const QueryStructure = (req): any => {
  const obj = req.query;
  const structure = {};
  for (const key in obj) {
    structure[key] = obj[key];
  }

  return {
    ...structure,
  };
};

export { QueryStructure };
