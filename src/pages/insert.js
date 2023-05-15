import { Link } from "react-router-dom";
import { useEffect } from "react";

const Insert = () => {
    useEffect(() => {
        let input = document.querySelectorAll('.insert-input');
        for(let i = 0; i < input.length; i++) {
            input[i].addEventListener('input', e => {
                if(e.target.value){
                    e.target.classList.add('float')
                } else{
                    e.target.classList.remove('float')
                }
            })
        }
        let textInput = document.querySelector('.insert-text');
        textInput.addEventListener('input', e => {
            if(e.target.value){
                e.target.classList.add('float')
            } else{
                e.target.classList.remove('float')
            }
        })
    }, []);
    
        
    return (
        <main>
            <div className="insert-container">
                <div className="form-container">
                    <form className="insert-form">
                        <div className="group">
                            <input className="insert-input" type="text" id="maker" name="maker"/>
                            <label className="insert-label" htmlFor="maker"><span className="content-name">Maker</span></label>
                        </div>
                        <div className="group">
                            <input className="insert-input" type="text" id="name" name="name"/>
                            <label className="insert-label" htmlFor="name"><span className="content-name">Name</span></label>
                        </div>
                        <div className="group">
                            <input className="insert-input" type="text" id="code" name="code"/>
                            <label className="insert-label" htmlFor="code"><span className="content-name">Code</span></label>
                        </div>
                        <div className="group">
                            <input className="insert-input" type="text" id="type" name="type" required/>
                            <label className="insert-label" htmlFor="type"><span className="content-name required">Type</span></label>
                        </div>
                        <div className="group">
                            <label className="insert-select-label required" htmlFor="color">Color</label>
                            <select className="insert-select" defaultValue="" id="color" name="color" required>
                                <option value="" disabled hidden>Select color...</option>
                                <option value="pink">Pink</option>
                                <option value="red">Red</option>
                                <option value="orange">Orange</option>
                                <option value="yellow">Yellow</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                                <option value="purple">Purple</option>
                                <option value="amber">Amber</option>
                                <option value="black">Black</option>
                                <option value="white">White</option>
                                <option value="gray">Gray</option>
                                <option value="multi">Multi</option>
                                <option value="clear">Clear</option>
                            </select>
                        </div>
                        <div className="group">
                            <textarea className="insert-text" rows="6" id="description" name="description"/>
                            <label className="insert-label insert-desc-label" htmlFor="description"><span className="content-name">Description</span></label>
                        </div>
                        <div className="group">
                            <label className="insert-img-label required" htmlFor="image">Image</label>
                            <input className="insert-image" type="file" id="image" name="image" required/>
                        </div>
                        <button className="see-all" type="submit">
                            <div className="button-bg"></div><span>SUBMIT</span>
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Insert;