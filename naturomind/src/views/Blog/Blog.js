import React from 'react';
import './Blog.css';

export default class Blog extends React.Component{
    render() {
        const urlInfo = window.location.href.split('/#/');
        const pageNumber = urlInfo[1].split('/')[1];
        console.log('pageNumber: ' + pageNumber);
        return (
            <div className={'blog-wrapper-div'}>
                <h1>{`Sample Article #1`}</h1>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', flex:1}}>
                    <div style={{backgroundColor:'#ffffff', borderRadius:5, margin:5, flex:1}}>
                        {`Sample Article #1 Written Content Here`}
                    </div>
                    <div style={{backgroundColor:'#ffffff', borderRadius:5, margin:5, flex:1}}>
                        {`Sample Article #1 Photos Here`}
                    </div>
                </div>
                <nav aria-label="Page navigation example" style={{marginTop:10}}>
                    <ul className="pagination justify-content-center">
                        <li className={pageNumber === '1' ? "page-item disabled" : "page-item"}>
                            <a className="page-link" href={`/#/blog/${parseInt(pageNumber)-1}`} tabIndex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li className={pageNumber === '1' ? "page-item active" : "page-item"}><a className="page-link" href="/#/blog/1">1</a></li>
                        <li className={pageNumber === '2' ? "page-item active" : "page-item"}><a className="page-link" href="/#/blog/2">2</a></li>
                        <li className={pageNumber === '3' ? "page-item active" : "page-item"}><a className="page-link" href="/#/blog/3">3</a></li>
                        <li className={"page-item"}>
                            <a className="page-link" href={`/#/blog/${parseInt(pageNumber)+1}`}>Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}