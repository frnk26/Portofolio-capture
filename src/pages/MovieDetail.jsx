import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import movie data
import { MovieState } from "../movieState";

//import styled components
import styled from "styled-components";
const MovieDetail = () => {
  const url = useLocation();
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //to get and filter the url from movieState.jsx using useLocation
  useEffect(() => {
    const currentMovie = movies.filter(
      (stateMovie) => stateMovie.url === url.pathname
    );
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <StyledDetails>
          <StlyedHeadline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="" />
          </StlyedHeadline>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
        </StyledDetails>
      )}
    </>
  );
};
// styling the content
const StyledDetails = styled.div`
  color: white;
`;
const StlyedHeadline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 5rem 10rem;
`;

const AwardStyled = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2em;
  }
  .line {
    width: 100%;
    height: 0.5rem;
    background: #23d997;
    margin: 1rem 0;
  }
  p {
    padding: 2rem 0rem;
  }
`;

// Award Component
const Award = ({ title, description }) => {
  return (
    <AwardStyled>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyled>
  );
};

export default MovieDetail;
