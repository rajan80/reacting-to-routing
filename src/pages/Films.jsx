import {useState, useEffect} from 'react';
import {Link } from 'react-router-dom';

const Films =()=>{

    const [films, setfilms] = useState([]);
    
  useEffect(() => {
    fetch(" https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((allfilms) => setfilms(allfilms));
  }, []);

    return(
          <main className="container">
              <section className="row-mt-3">
                  <div className="col-12">
                      <h1 className="text-center">Films</h1>
                      {films.map((films) => (
            <div className="col-md-12" key={`user-card-${films.id}`}>
              <div className="card shadow my-1">
                <div className="card-body">
                  <h4 className="card-title">{films.allfilms}</h4>

                  <p className="card-subtitle text-muted">{films.title}</p>
                  <p className="card-rext">{films.description}</p>
                  <Link to={`/films/${films.id}`} className="btn btn-primary">Return</Link>
                  <a href={`https://ghibliapi.herokuapp.com/films/${films.id}`}>
                    Link To Json
                  </a>
                </div>
              </div>
            </div>
          ))}

                  </div>

              </section>

          </main>

    )
}
export default Films;