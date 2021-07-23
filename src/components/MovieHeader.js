import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { toggleFavorite } from "../actions/favoriteActions";

const MovieHeader = (props) => {
  const { push } = useHistory();

  const handleFavoriteClick = () => {
    props.toggleFavorite();
  };

  return (
    <div className="table-title">
      <div className="row">
        <div className="col-sm-6">
          <h2>{props.appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
          <div className="btn btn-sm btn-primary">
            <span onClick={handleFavoriteClick}>
              {props.displayFavorites ? "Hide" : "Show"} Favorites
            </span>
          </div>
          <Link to="/movies" className="btn btn-sm btn-primary">
            View All Movies
          </Link>
          <Link to="/movies/add" className="btn btn-sm btn-success">
            <i className="material-icons">&#xE147;</i>{" "}
            <span>Add New Movie</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appTitle: state.movie.appTitle,
    displayFavorites: state.favorite.displayFavorites,
  };
};

export default connect(mapStateToProps, { toggleFavorite })(MovieHeader);
