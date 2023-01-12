import React, {Component} from 'react';
import CaruselBox from "../Modules/CaruselBox";
import Cards from "../Modules/Cards";


class Home extends Component {
    render() {
        return (
            <div>
                <CaruselBox />
                <Cards isShowThreeCards={true}/>
                <Cards isShowThreeCards={false} />
            </div>
        );
    }
}

export default Home;