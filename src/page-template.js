const generatePage = (name, github) => {
    return `
  
  # ${name}
  
  ## [Github](https://github.com/${github})
  
      `;
  };

  module.exports = generatePage;