import React, { useState, useEffect } from 'react';
import { FaGamepad } from 'react-icons/fa'; 
import { MdSelectAll, MdWebAsset } from 'react-icons/md';

import FadeIn from 'react-fade-in';
import portfolio from './PortfolioList';

import 'react-lazy-load-image-component/src/effects/blur.css';

import './portfolio.sass';

function Portfolio() {
    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(18);

    const slice = projects.slice(0, itemsToShow);
      
      useEffect(() => {
        setProjects(portfolio);
        const filtered = portfolio.map(p => ({ ...p, filtered: p.category.includes(filter)}));
        setProjects(filtered);
      }, [filter], []);

      useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries.some(entry => entry.isIntersecting)) {
                setItemsToShow(itemsToShow + 18) 
            }
        });
        observer.observe(document.getElementById('sentinal'));
        return () => observer.disconnect();
      });

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
                {slice.map(project => project.filtered === true ? (
                    <FadeIn key={project.title}>
                        <div  className="card-wrap">
                            <a target="_blank" rel="noopener noreferrer" href={project.url}>
                                <div className="card">
                                    <div className="card-bg">
                                        <img src={project.img} />
                                    </div>
                                    <div className="card-info">
                                        <h1>{project.title}</h1>
                                    </div>
                                </div> 
                            </a> 
                        </div> 
                    </FadeIn>            
                ) : '' )}
                <div id="sentinal"/>
            </div>
        </div>
    );
}

export default Portfolio;