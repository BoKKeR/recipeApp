import React from "react";
import {connect} from "react-redux";

class RecipeDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    getCurrentRecipe = (props) => {
        console.log(this.props.recipeSelected);
        return this.props.recipes[this.props.recipeSelected];
    };



    render() {
        return (
        )
    }
}

const mapStateToProps = state => {
    return {
        recipes: state.values.recipes,
        recipeSelected: state.values.recipeSelected
    };
};

const mapDispatchToProps = dispatch => {
    return {
//
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);