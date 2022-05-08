const generateProjects = projectsArr => {
    const projectHtmlArr = projectsArr.map(({ name, description, languages, link }) => {
        return `
            <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
              <h3 class="portfolio-item-title text-light">${name}</h3>
              <h5 class="portfolio-languages">
                Built With:
                ${languages.join(', ')}
              </h5>
              <p>${description}</p>
              <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
            </div>
          `;
      });
  
    return `
      <section class="my-3" id="portfolio">
        <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
        <div class="flex-row justify-space-between">
        ${projectHtmlArr.join('')}
        </div>
      </section>
    `;
  };
// create the about section
const generateAbout = aboutText => {
    if (!aboutText) {
      return '';
    }
  
    return `
## About Me 

${aboutText}
    `;
  };

module.exports = templateData => {
    // destructure page data by section
    const { projects, about, ...header } = templateData;
  
    return `

# ${header.name}

## [GitHub](https://github.com/${header.github})

${generateAbout(about)}
${generateProjects(projects)}

    `;
  };