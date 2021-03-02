
import {useState, useEffect} from 'react';
import {Link } from 'react-router-dom';

const People =()=>{
    const [people, setpeople] = useState([]);
    useEffect(() => {
        fetch(" https://ghibliapi.herokuapp.com/people")
          .then((res) => res.json())
          .then((allpeople) => setpeople(allpeople));
      }, []);
    return(
          <main className="container">
              <section className="row-mt-3">
                  <div className="col-12">
                      <h1 className="text-center">people</h1>
                      {people.map((people) => (
            <div className="col-md-12" key={`user-card-${people.id}`}>
              <div className="card shadow my-2">
                <div className="card-body">
                  <h4 className="card-title">{people.allpeople}</h4>

                  <p className="card-subtitle text-muted">{people.name}</p>
                  <p className="card-rext">{people.age}</p>
                  <p className="card-rext">{people.gender}</p>
                  <Link to={`/films/${people.id}`} className="btn btn-primary">Return</Link>
                  <a
                    href={`https://ghibliapi.herokuapp.com/people/${people.id}`}
                  >
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
export default People;