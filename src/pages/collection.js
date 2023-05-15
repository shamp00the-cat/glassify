import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/product-card";

const Collection = () => {
    const [checked, setChecked] = useState([]);
    const [filtersList, setFiltersList] = useState({
        colors: []
    })
    const [pieces, setPieces] = useState("");

    function getPieces() {
        axios.get("https://swiss1.hunter.cuny.edu/students/dev4/build/api/getCatalog.php").then(function(response) {
            setPieces(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    function getFilter(filters) {
        let color = filters.colors.toString();
        console.log(color);
        axios.get("https://swiss1.hunter.cuny.edu/students/dev4/build/api/getCatalog.php", {params: { colors: color}}).then(function(response) {
            setPieces(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const handleToggle = (value, section) => {
        let list = [...checked];
        if(checked.includes(value) === false) {
            list.push(value);
        } else {
            list.splice(checked.indexOf(value), 1)
        }
        setChecked(list);
        handleFilters(list, section);
    }
    const handleFilters = (filters, category) => {
        const newFilters = { ...filtersList };

        newFilters[category] = filters;
        if(newFilters.colors.length == 0) {
            getPieces();
        } else {
            getFilter(newFilters)
        }
        setFiltersList(newFilters)
    }

    useEffect(() => {
        getPieces();
    }, []);
    return (
        <main>
            <div className="browse-page">
                <h1 className="title">BROWSE</h1>
                <div className="browse-container">
                    <div id="primary-filter" className="filter-container" data-visible="false">
                        <h3>Filters</h3>
                        <div className="filter-items">
                            {data.map((filter, i) => (
                                <div key={i} className="item">
                                    <div className="item-title">
                                        <h4>{filter.title}</h4>
                                    </div>
                                    <div className="item-content">
                                        <ul>
                                            {filter.content.map((option, index) => (
                                                <li key={index}><input type="checkbox" className="radio-item" name={filter.class} value={option.text} id={option.text} onChange={() => handleToggle(option.text, filter.class)} checked={checked.indexOf(option.text) !== -1 ? true : false}/><label htmlFor={option.text}><div className="circle" style={{background: option.code}}></div>{option.text}</label></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="pieces-container">
                        <div className="results-cards">
                            {pieces && pieces?.map((piece, i) => (
                                <ProductCard 
                                key={i}
                                piece={piece}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

const data = [
    {
        title: "Colors",
        class: "colors",
        content: [
            {
                text: "Pink",
                code: "#f96995"
            },
            {
                text: "Red",
                code: "#ff0000"
            },
            {
                text: "Orange",
                code: "#ff8300"
            },
            {
                text: "Yellow",
                code: "#fede00"
            },
            {
                text: "Green",
                code: "#59981a"
            },
            {
                text: "Blue",
                code: "#0000ff"
            },
            {
                text: "Purple",
                code: "#8500bf"
            },
            {
                text: "Amber",
                code: "#a76d54"
            },
            {
                text: "Black",
                code: "#000"
            },
            {
                text: "White",
                code: "#fff"
            },
            {
                text: "Gray",
                code: "#aaa"
            },
            {
                text: "Multi",
                code: "linear-gradient(135deg, rgba(255, 0, 0, 1) 0%, rgba(255, 154, 0, 1) 10%, rgba(208, 222, 33, 1) 20%, rgba(79, 220, 74, 1) 30%, rgba(63, 218, 216, 1) 40%, rgba(47, 201, 226, 1) 50%, rgba(28, 127, 238, 1) 60%, rgba(95, 21, 242, 1) 70%, rgba(186, 12, 248, 1) 80%, rgba(251, 7, 217, 1) 90%, rgba(255, 0, 0, 1) 100%)"
            },
            {
                text: "Clear",
                code: "linear-gradient(135deg, rgba(184, 198, 219, 1) 0%, rgba(245, 247, 250, 1) 74%, rgba(222, 228, 234, 1) 100%)"
            }
        ]
    }
]

export default Collection;