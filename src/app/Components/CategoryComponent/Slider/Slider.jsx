import React from "react";
import s from './Slider.module.scss';

export default class Slider extends React.Component {

    constructor(props) {
        super(props);
        this.delay = 1000;
        this.status = false;
        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
    }
    addClassCallback(sliderList, callback) {

        callback();
    }

    imageResize() {
        let newSize = document.documentElement.clientWidth;
        let images = document.getElementsByClassName(s.sliderImage);
        for(let i = 0; i < images.length; i++) {
            images[i].style.width = newSize + "px";
        }
    }

    moveLeft() {
        if(this.status === false) {
            this.status = true;
            let sliderList = document.getElementsByClassName(s.imagesList)[0];
            let Images = document.getElementsByClassName(s.sliderItem);
            let newLastImage = Images[0].cloneNode(true)
            sliderList.appendChild(newLastImage);
            sliderList.classList.add(s.onMove);
            sliderList.style.left = `-${Images[0].offsetWidth}px`;
            setTimeout(() => {
                sliderList.classList.remove(s.onMove);
                sliderList.removeChild(Images[0]);
                sliderList.style.left = '0';
                this.status = false;
            }, this.delay);
        } else return;
    }
    moveRight() {
        if(this.status === false) {
            this.status = true;
            let sliderList = document.getElementsByClassName(s.imagesList)[0];
            let Images = document.getElementsByClassName(s.sliderItem);
            let newFirstImage = Images[Images.length - 1].cloneNode(true)
            sliderList.insertBefore(newFirstImage, Images[0]);
            sliderList.classList.add(s.onMove);
            sliderList.style.marginLeft = `-${Images[0].offsetWidth}px`;
            sliderList.style.left = `${Images[0].offsetWidth}px`;
            setTimeout(() =>{
                sliderList.classList.remove(s.onMove);
                sliderList.removeChild(Images[Images.length - 1]);
                sliderList.style.marginLeft = `0`;
                sliderList.style.left = '0';
                this.status = false;
            }, this.delay);
        } else return;
    }
    componentDidMount() {
        this.imageResize();
    }
    render() {
        window.onresize = () => {this.imageResize()};
        return (
            <div className={s.slider}>
                <div className={s.viewport}>
                    <ul className={s.imagesList}>
                        <li className={s.sliderItem}><img src="https://wf.cdn.gmru.net/ms/data/newsx/fdad382c5e6ce0f0ac266a5d3ba27678.jpg" alt="" className={s.sliderImage} /></li>
                        <li className={s.sliderItem}><img src="http://www.radionetplus.ru/uploads/posts/2013-04/thumbs/1365401196_teplye-oboi-1.jpeg" alt="" className={s.sliderImage} /></li>
                        <li className={s.sliderItem}><img src="https://focus.ua/storage/pub/images/2017/0367503_2615387.jpg" alt="" className={s.sliderImage} /></li>
                        <li className={s.sliderItem}><img src="http://mirpozitiva.ru/uploads/posts/2016-08/1472042805_21.jpg" alt="" className={s.sliderImage} /></li>
                        <li className={s.sliderItem}><img src="http://mirpozitiva.ru/uploads/posts/2016-08/1472042718_14.jpg" alt="" className={s.sliderImage} /></li>
                    </ul>
                </div>
                <div className={`${s.arrow} ${s.directionLeft}`} onClick={this.moveRight}>&#60;</div>
                <div className={`${s.arrow} ${s.directionRight}`} onClick={this.moveLeft}>&#62;</div>
            </div>
        )
    }
}