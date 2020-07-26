import React from 'react';
import './Home.css';

export default class Home extends React.Component {
    render() {
        return (
            <div className={'home'}>
               <h1 className={'home-title'}>Naturomind</h1>
               <h3 className={'home-subtitle'}>Go Natural. Back to Health.</h3>
               <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', marginTop:50, paddingTop:20, paddingBottom:20, backgroundColor:'#ecf4f3'}}>
                    <div className={'home-subtitle-dark'} /* style={{display:'flex', marginLeft:'auto', marginRight:'auto', marginTop:'5%', marginBottom:'5%', backgroundColor:'#ffffff'}} */>
                        {'There is an energy, spirit & magic in Nature!'}
                    </div> 
                    <h1>About Gargi</h1>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'center', marginTop:10}}>
                        <div className="card" style={{width:"25rem"}}>
                                <img src={require('./gargi.png')} className="card-img-top" alt="..."/>
                        </div>
                        <div className="card" style={{width:"25rem"}}>
                            <div className="card-body">
                                <p className="card-text">
                                    Hello and Welcome! I’m a current teenager that attends Homestead high school in the Bay Area. Besides naturopathy my main interests include dance, taekwondo and being able to hangout with my friends. I got interested in the study of naturopathy when I saw many of my peers were struggling from problems such as mental breakdowns and immense amounts of stress from school and outside activities. Throughout my life I always had dance to take my mind off certain things and it acted as a stress reliever, but I quickly figured out that many teenagers and adults don't have this. I realized that if more people knew about things such as mental health and natural ways to take care of ourselves we can build a healthier lifestyle. I hope with exploring the study of naturopathy more people can learn these simple techniques of self care. Together let's embark on a journey to achieve beneficial behaviors that can improve our life. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', marginTop:'2%', marginBottom:'2%'}}>
                        <div className="card" style={{width:"25rem"}}>
                            <div className="card-body">
                                <h2 className='card-title'>
                                    Contact Us
                                </h2>
                                <p className="card-text">
                                    Email: contact.naturomind@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}