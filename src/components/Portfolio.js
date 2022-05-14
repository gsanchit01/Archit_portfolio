import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row work">
            <div className="three columns header-col">
               <h1><span>Projects</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.portfolio && resumeData.portfolio.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.ProjectName}</h3>
                          <p className="info">
                          {item.link}
                          </p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>
  </section>
        );
  }
}