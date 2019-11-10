import React from "react";
import { connect } from "react-redux";

import "./MovieDetail.css";

const MovieDetail = ({ movies, match }) => {
  const movie = movies.find(
    m => m.id.toString() === match.params.id.toString()
  );
  const { name, rating, date, summary, url, charachers, image } = movie;
  const truncatedURL = url
    ? url.substring(0, 20) + (url.length > 20 ? "..." : "")
    : "";

  return (
    <div className="MovieDetail container-fluid">
      <div className="row px-md-5">
        <div className="col">
          <h3>{name}</h3>
          <div className="d-flex flex-wrap">
            <img
              src={image || `${process.env.PUBLIC_URL}/defautImage.jpg`}
              alt={name}
            />
            <div className="info mt-3 mt-md-0 flex-grow-1">
              <div className="d-block d-md-flex flex-wrap justify-content-between">
                {rating && <label>{"Rating: " + rating}</label>}
                <label>{"Date: " + new Date(date).toLocaleDateString()}</label>
                {url && (
                  <label>
                    URL:{" "}
                    {url && (
                      <a href={url} alt="movie url">
                        {truncatedURL}
                      </a>
                    )}
                  </label>
                )}
              </div>
              <label>Synopsis</label>
              <p className="ml-0 ml-md-3" dangerouslySetInnerHTML={{ __html: summary }} />
              <label>Charachers</label>
              {charachers &&
                charachers.map((char, index) => (
                  <span key={index}>{char.name}</span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(
  mapStateToProps,
  null
)(MovieDetail);
