import React, { Component} from 'react'


export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Cephas'
    }
  }
  render () {
    return (<section id="listings">
    <section className="search-area">
    <input type="text" name="search"/>
    </section>

    <section className="sortby-area">
    <div className="results">
      390 results found
    </div>
    <div className="sort-options">
      <select name="sortby" className="sortby">
        <option value="price-asc">Highest Price</option>
        <option value="price-dsc">Lowest Price</option>
        </select>
        <div className="view">
          <i className="fa fa-th-list" aria-hidden="true"></i>
          <i className="fa fa-th" aria-hidden="true"></i>
        </div>
    </div>
    </section>

    <section className="listings-results">
      <div className="col-md-3">
        <div className="listings">
          <div className="listings-img">
            <span className="address">The New Jerusalem</span>
            <div className="details">
              <div className="col-md-3">
                <div className="user-img"></div>
                </div>

                <div className="col-md-9">
                <div className="user-details">
                    <span className="user-name">Apostle Paul</span>
                    <span className="post-date"> "Now"</span>
                  </div>
                    <div className="listings-details">
                      <div className="floor-space">
                      <i className="fa fa-square-o" aria-hidden="true"></i>
                      <span>1000 ft&sup2;</span>
                      </div>
                      <div className="bedrooms">
                        <i className="fa fa-bed" aria-hidden="true"></i>
                        <span> 3 bedrooms </span>
                      </div>
                    </div>
                    <div className="view-btn">
                      View Listings
                    </div>
                </div>

            </div>
          </div>

          <div className="bottom-info">
            <span className="price">$1000 / month</span>
            <span classname="location"><i className="fa fa-map-marker" aria-hidden="true"></i> Ridgewood, NY </span>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="listings">
          <div className="listings-img">
            <span className="address">The New Jerusalem</span>
            <div className="details">
              <div className="col-md-3">
                <div className="user-img"></div>
                </div>

                <div className="col-md-9">
                <div className="user-details">
                    <span className="user-name">Apostle Paul</span>
                    <span className="post-date"> "Now"</span>
                  </div>
                    <div className="listings-details">
                      <div className="floor-space">
                      <i className="fa fa-square-o" aria-hidden="true"></i>
                      <span>1000 ft&sup2;</span>
                      </div>
                      <div className="bedrooms">
                        <i className="fa fa-bed" aria-hidden="true"></i>
                        <span> 3 bedrooms </span>
                      </div>
                    </div>
                    <div className="view-btn">
                      View Listings
                    </div>
                </div>

            </div>
          </div>

          <div className="bottom-info">
            <span className="price">$1000 / month</span>
            <span classname="location"><i className="fa fa-map-marker" aria-hidden="true"></i> Ridgewood, NY </span>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="listings">
          <div className="listings-img">
            <span className="address">The New Jerusalem</span>
            <div className="details">
              <div className="col-md-3">
                <div className="user-img"></div>
                </div>

                <div className="col-md-9">
                <div className="user-details">
                    <span className="user-name">Apostle Paul</span>
                    <span className="post-date"> "Now"</span>
                  </div>
                    <div className="listings-details">
                      <div className="floor-space">
                      <i className="fa fa-square-o" aria-hidden="true"></i>
                      <span>1000 ft&sup2;</span>
                      </div>
                      <div className="bedrooms">
                        <i className="fa fa-bed" aria-hidden="true"></i>
                        <span> 3 bedrooms </span>
                      </div>
                    </div>
                    <div className="view-btn">
                      View Listings
                    </div>
                </div>

            </div>
          </div>

          <div className="bottom-info">
            <span className="price">$1000 / month</span>
            <span classname="location"><i className="fa fa-map-marker" aria-hidden="true"></i> Ridgewood, NY </span>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="listings">
          <div className="listings-img">
            <span className="address">The New Jerusalem</span>
            <div className="details">
              <div className="col-md-3">
                <div className="user-img"></div>
                </div>

                <div className="col-md-9">
                <div className="user-details">
                    <span className="user-name">Apostle Paul</span>
                    <span className="post-date"> "Now"</span>
                  </div>
                    <div className="listings-details">
                      <div className="floor-space">
                      <i className="fa fa-square-o" aria-hidden="true"></i>
                      <span>1000 ft&sup2;</span>
                      </div>
                      <div className="bedrooms">
                        <i className="fa fa-bed" aria-hidden="true"></i>
                        <span> 3 bedrooms </span>
                      </div>
                    </div>
                    <div className="view-btn">
                      View Listings
                    </div>
                </div>

            </div>
          </div>

          <div className="bottom-info">
            <span className="price">$1000 / month</span>
            <span classname="location"><i className="fa fa-map-marker" aria-hidden="true"></i> Ridgewood, NY </span>
          </div>
        </div>
      </div>
    </section>

    <section id="pagination">
      <ul className="numbers">
        <li>Prev</li>
        <li className="active">1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>Prev</li>
      </ul>

    </section>

      </section>)
  }
}
