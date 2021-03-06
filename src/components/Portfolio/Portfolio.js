import React, { useState, useEffect } from 'react';
import { FaGamepad } from 'react-icons/fa'; 
import { MdSelectAll, MdWebAsset } from 'react-icons/md';

import FadeIn from 'react-fade-in';
import portfolio from './PortfolioList';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './portfolio.sass';

function Portfolio() {
    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);
    
    function shuffle(arra1) {
        var ctr = arra1.length,
          temp,
          index;
        while (ctr > 0) {
          index = Math.floor(Math.random() * ctr);
          ctr--;
          temp = arra1[ctr];
          arra1[ctr] = arra1[index];
          arra1[index] = temp;
        }
        return arra1;
      }
      
      useEffect(() => {
        setProjects(shuffle(portfolio));
        const filtered = portfolio.map(p => ({ ...p, filtered: p.category.includes(filter) }));
        setProjects(filtered);
      }, [filter], []);

    return (
        <div>
            <div id="buttons">
                <div>
                    <div className="w4-container">
                        <div className="content">
                            <div className="navigation-bar">
                                <div className="wrapper-fluid-fex">
                                    <div className="w4-container-laptop">
                                        <button  title="Todos" className="button"  onClick={() => setFilter('all')}>
                                            <MdSelectAll/>
                                        </button>
                                    </div>
                                    <div className="w4-container-laptop">
                                        <button  title="Websites" className="button"  onClick={() => setFilter('website')}>
                                            <MdWebAsset/>
                                        </button>
                                    </div>
                                    <div className="w4-container-laptop">
                                        <button  title="Jogos" className="button" onClick={() => setFilter('game')}>
                                            <FaGamepad/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="portfolio">
                {projects.map(project => project.filtered === true ? (
                    <FadeIn key={project.title}>
                        <a target="_blank" href={project.video || project.url}>
                            <div  className="card-wrap">
                                <div className="card">
                                    <div className="card-bg" style={{ backgroundImage:'url(' + `${project.img}` + ')'}}/>
                                    <div className="card-info">
                                        <h1>{project.title}</h1>
                                    </div>
                                </div> 
                            </div> 
                        </a>  
                    </FadeIn>            
                ) : '' )}
            </div>
        </div>
    );
}

export default Portfolio;