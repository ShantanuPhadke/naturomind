import React from 'react';
import './Home.css';

export default class Home extends React.Component {
    render() {
        return (
            <div className={'home-wrapper-div'}>
                <div className={'home'}>
                    <div className={'home-title'}>
                        NATUROMIND
                    </div>
                    <div className={'home-subtitle'}>
                        Nature for the Mind
                    </div>
                </div>
                <div className={'home-health-plan'}>
                    <div className={'home-health-plan-title'}>
                        <h1>Our 6-Step Health Plan</h1>
                    </div>
                    <div className={'home-health-plan-detail-row'}>
                        <div className={'home-health-plan-detail-tab'}>
                            <img className={'home-health-plan-detail-image'} src={ require('./home_diet_plan.jpg')} alt={'By Jenna Hamra from Pexels'}/>
                            <h4>DIET COUNSELING</h4>
                            <p className={'home-health-plan-detail-text'}>
                                Dietetic Counseling is a healing technique based on the principle of free and uninterrupted energy flow and helps activate the natural healing processes in each patient's body as well as to restore their physical and emotional well-being. As a certified Naturopathic Practitioner, I help patients reduce their stress and anxiety, among other ailments.
                            </p>
                        </div>
                        <div className={'home-health-plan-detail-tab'}>
                            <img className={'home-health-plan-detail-image'} src={ require('./home_jogging.jpg') } alt={'From Pixabay'} />
                            <h4>EXERCISES</h4>
                            <p className={'home-health-plan-detail-text'}>
                                Any body movement cannot be called as an Exercise. An Exercise should always be  active, creative and recreational. This is a very important part where mostly people fail to get a proper and scientific guidance from an experienced personal trainer. At LifeNaturals, you will have a daily online exercise session where a qualified personal trainer will conduct your session and guide you regarding the right kind of exercise needed according to your health necessity.
                            </p>
                        </div>
                        <div className={'home-health-plan-detail-tab'}>
                            <img className={'home-health-plan-detail-image'} src={ require('./home_yoga.jpg') } alt={'By Samuel Silitonga from Pexels'} />
                            <h4>YOGA</h4>
                            <p className={'home-health-plan-detail-text'}>
                                Breathing exercises to strengthen the lungs and to improve an overall oxygen supply to your entire body are very essential. Our Exercise sessions include Scientific Pranayams to achive a healthy Mind and Body.
                            </p>
                        </div>
                    </div>
                    <div className={'home-health-plan-detail-row'}>
                        <div className={'home-health-plan-detail-tab'}>
                            <img className={'home-health-plan-detail-image'} src={ require('./home_hydrotherapy.jpg') } alt={'By Alexis Azabache'} />
                            <h4>HYDROTHERAPY</h4>
                            <p className={'home-health-plan-detail-text'}>
                                This includes few supportive treatments using water in the form of medicine. The main purpose of these treatments is to speed up and help the body in Detoxifying itself. These are very easy to implement at your home itself. A perfect guidance is given online about the implementation of these treatments. They are not at all time consuming and are also very easy.
                                We do not need any special equipments or tubs to apply these treatments at home. We use the things available at your home!
                            </p>
                        </div>
                        <div className={'home-health-plan-detail-tab'}>
                            <img className={'home-health-plan-detail-image'} src={ require('./home_holistic_approach.jpg') } alt={"By Elly Fairytale from Pexels"}/>
                            <h4>HOLISTIC APPROACH</h4>
                            <p className={'home-health-plan-detail-text'}>
                                Holistic medicine is a broad range of medical practices that are based on many years of tradition. With our  treatment, your body and mind will feel free and clear of all worries and stress that life places upon us. We implement a variety of holistic techniques that will surely help to heal you both mentally and physically.
                            </p>
                        </div>
                        <div className={'home-health-plan-detail-tab'}>
                            <img className={'home-health-plan-detail-image'} src={ require('./home_total_body_detox.jpg') } alt={'By Vegan Liftz from Pexels'}/>
                            <h4>DETOX</h4>
                            <p className={'home-health-plan-detail-text'}>
                                All the treatments of Nature Cure are based on total detoxification of the body. Our healing is inside-out. We support the natural healing system of the body, which speeds up the detox processes and helps to strengthen the internal organs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}