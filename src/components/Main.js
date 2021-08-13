import React from 'react';
import FilterByHorn from './FilterByHorn';
import HornedBeast from './HornedBeast'
import './Main.css';
let horned = require("./InfoArray.json")








class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            horned2: horned,
        }
    }



    selectHornNum = (event) => {
        event.preventDefault();

        let HornNum = [];

        let selectHorn = (event.target.value);
        if (!(isNaN(selectHorn))) {
            // console.log(selectHorn)
           HornNum = horned.filter((item) => {
                if (item.horns === selectHorn) {
                    return 1;
                }
            })

        } else {
            HornNum = horned;
        
        }

        this.setState({
            horned2: HornNum
        })
    }

    render() {
        return (
            <div>

                
                <FilterByHorn selectHornNum={this.selectHornNum} />





                {horned.map((item, i) => {
                    return (
                        <HornedBeast
                            key={i}
                            title={item.title}
                            imageUrl={item.image_url}
                            description={item.description}
                            showTheModal={this.props.showTheModal}
                            data={item}
                            hornNum={this.props.hornNum}
                        />
                    )
                })}

            </div>




        )
    }
}


export default Main;


            // <div>
            //     <HornedBeast title= 'Horned:1' imageUrl='http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg' description='A unicorn and a narwhal nuzzling their horns ' />
            //     <HornedBeast title='Horned:2' imageUrl='https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80' description='Mother (or father) rhino with two babies' />
            //     <HornedBeast title='Horned:3' imageUrl='https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg' description='Someone wearing a creepy unicorn head mask'  />

            // </div>