import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Movie from './Movie'

function MoviesList() {
  const movies = [
    {
      name: 'The Shawshank Redemption',
      language: 'English',
      year: '1994',
      cast: 'Tim Robbins, Morgan Freeman, Bob Gunton',
      rating: 'U',
      genre: 'Drama/Crime',
      image:
        'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY1200_CR89,0,630,1200_AL_.jpg',
    },
    {
      name: 'The Godfather',
      language: 'English',
      year: '1972',
      cast: 'Marlon Brando, Al Pacino, James Caan',
      rating: 'U',
      genre: 'Drama/Crime',
      image:
        'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg',
    },
    {
      name: 'The Godfather: Part II',
      language: 'English',
      year: '1974',
      cast: 'Al Pacino, Robert De Niro, Robert Duvall',
      rating: 'U',
      genre: 'Drama/Crime',
      image:
        'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    },
    {
      name: 'The Dark Knight',
      language: 'English',
      year: '1974',
      cast: 'Christian Bale, Heath Ledger, Aaron Eckhart',
      rating: 'U',
      genre: 'Drama',
      image:
        'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
    },
    {
      name: 'Tamasha',
      language: 'English',
      year: '2015',
      cast: 'Daniel Craig, Ralph Fiennie, Ben Whishaw, Naomie Harris',
      rating: 'U/A',
      genre: 'Romance/Drama',
      image: 'https://flxt.tmsimg.com/assets/p12217149_p_v8_ab.jpg',
    },
    {
      name: '12 Angry Men',
      year: '1957',
      language: 'English',
      cast: 'Henry Fonda, Lee J. Cobb, Martin Balsam',
      rating: 'U/A',
      genre: 'Drama/Legal drama',
      image: 'https://flxt.tmsimg.com/assets/p2084_p_v10_ad.jpg',
    },
    {
      name: `Schindler's List`,
      year: '1993',
      language: 'English',
      cast: 'Liam Neeson, Ralph Fiennes, Ben Kingsley',
      rating: 'U/A',
      genre: 'War/Drama',
      image:
        'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
    },
    {
      name: `Fight Club`,
      year: '1999',
      language: 'English',
      cast: 'Brad Pitt, Edward Norton, Meat Loaf',
      rating: 'A',
      genre: 'Drama/Dark comedy',
      image:
        'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR85,0,630,1200_AL_.jpg',
    },
    {
      name: `Forrest Gump`,
      year: '1994',
      language: 'English',
      cast: 'Tom Hanks, Robin Wright, Gary Sinise',
      rating: 'A',
      genre: 'Drama/Romance',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkrcZCER-l3ePYVtpfI3tb5IwbF4HfBPV6jPExXDXFm4aHiybHXiqLZF5DHy4GD1uLFyo&usqp=CAU',
    },
  ]

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <Typography
        align="center"
        component="h2"
        variant="h2"
        color="secondary"
        gutterBottom
      >
        <strong>Tuwaiq Box Office</strong>
      </Typography>
      <Grid container alignItems="center" justify="center" spacing={3}>
        {movies.map((movie, i) => {
          return (
            <Grid key={i} item lg={4} md={6} xs={12}>
              <Movie data={movie} />
            </Grid>
          )
        })}
        <Typography
          align="center"
          component="h6"
          variant="h6"
          color="secondary"
          gutterBottom
        >
          2021 © Tuwaiq Box Office
        </Typography>
      </Grid>
    </div>
  )
}

export default MoviesList
