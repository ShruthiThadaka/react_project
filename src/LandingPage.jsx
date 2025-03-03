import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import cryptoLogo from './assets/crypto.png';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from 'react-router-dom';

const LandingPage = ()=>{
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/Login")
    }
    return (
        <div className="App bg-dark">
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container">
                  <a className="navbar-brand" href="#home">
                    <img src={cryptoLogo} alt="" />
                  </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <a className="nav-link" href="#home">Home</a>
                      </li>
                      
                      <li className="nav-item">
                        <a className="nav-link" href="#features">Features</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#how-it-works">How It Works</a>
                      </li>
                      <li className="nav-item" onClick={handleClick}>
                        <a  className="nav-link text-white ms-3 px-4" href="#signup">Sign Up</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
        
              <header id="home" className="hero-section bg-dark text-white">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <h1 className="display-4 fw-bold mb-4">Track Crypto Markets in Real-Time</h1>
                      <p className="lead mb-4">
                        Get accurate, real-time cryptocurrency data with interactive charts, market insights, and personalized watchlists.
                      </p>
                        <button onClick={handleClick} className="btn btn-danger btn-lg px-4">Get Started</button>
                    </div>
                    <div className="col-lg-6 mt-5 mt-lg-0">
                      <img 
                        src="https://coinpush.app/wp-content/uploads/2024/08/cyrptomarket.jpeg" 
                        alt="Crypto Hub Dashboard Preview" 
                        className="img-fluid rounded shadow"
                      />
                    </div>
                  </div>
                </div>
              </header>
        
              <section className="py-5 text-light">
                <div className="container">
                  <div className="row text-center">
                    <div className="col-md-4 mb-4 mb-md-0">
                      <div className="stats-item">
                        <h2 className="fw-bold text-danger">500+</h2>
                        <p className="text-light">Cryptocurrencies</p>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0">
                      <div className="stats-item">
                        <h2 className="fw-bold text-danger">24/7</h2>
                        <p className="text-light">Real-time Updates</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="stats-item">
                        <h2 className="fw-bold text-danger">50,000+</h2>
                        <p className="text-light">Active Users</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
        
              <section id="features" className="text-light">
                <div className="container">
                  <div className="text-center mb-5">
                    <h2 className="fw-bold">Key Features</h2>
                    <p className="text-light">Everything you need to stay on top of the crypto market</p>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-4 mb-4">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body text-center p-4">
                          <div className="feature-icon bg-dark text-white rounded-circle mb-3">
                            <i className="bi bi-graph-up"></i>
                          </div>
                          <h5 className="card-title">Real-Time Price Updates</h5>
                          <p className="card-text text-muted">
                            Get live price tracking for popular cryptocurrencies with market statistics such as price change percentages and market capitalization.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-4 mb-4">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body text-center p-4">
                          <div className="feature-icon bg-dark text-white rounded-circle mb-3">
                            <i className="bi bi-star"></i>
                          </div>
                          <h5 className="card-title">Favorite List</h5>
                          <p className="card-text text-muted">
                            Add cryptocurrencies to your favorites for quick access and stay updated on your preferred investments.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-4 mb-4">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body text-center p-4">
                          <div className="feature-icon bg-dark text-white rounded-circle mb-3">
                            <i className="bi bi-search"></i>
                          </div>
                          <h5 className="card-title">Advanced Search</h5>
                          <p className="card-text text-muted">
                            Easily search for specific cryptocurrencies by name or symbol to quickly find the information you need.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-4 mb-4">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body text-center p-4">
                          <div className="feature-icon bg-dark text-white rounded-circle mb-3">
                            <i className="bi bi-bar-chart"></i>
                          </div>
                          <h5 className="card-title">Historical Data Charts</h5>
                          <p className="card-text text-muted">
                            Interactive charts to visualize historical price trends with multiple timeframe options.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-4 mb-4">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body text-center p-4">
                          <div className="feature-icon bg-dark text-white rounded-circle mb-3">
                            <i className="bi bi-currency-exchange"></i>
                          </div>
                          <h5 className="card-title">Currency Conversion</h5>
                          <p className="card-text text-muted">
                            Display prices in various fiat currencies including USD, EUR, and AUD for your convenience.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-4 mb-4">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body text-center p-4">
                          <div className="feature-icon bg-dark text-white rounded-circle mb-3">
                            <i className="bi bi-shield-check"></i>
                          </div>
                          <h5 className="card-title">Secure Platform</h5>
                          <p className="card-text text-muted">
                            No personal data storage ensures your privacy while you browse cryptocurrency information.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
        
              <section id="how-it-works" className="py-5 bg-dark ">
                <div className="container">
                  <div className="text-center mb-5">
                    <h2 className="fw-bold text-light">How It Works</h2>
                    <p className="text-light">Simple steps to start tracking your favorite cryptocurrencies</p>
                  </div>
                  
                  <div className="row justify-content-center">
                    <div className="col-md-10 text-light">
                      <div className="row">
                        <div className="col-md-4 text-center  mb-4 mb-md-0">
                          <div className="step-circle bg-dark border border-white  mx-auto mb-3">1</div>
                          <h5>Visit Homepage</h5>
                          <p>Browse top cryptocurrencies and get a market overview</p>
                        </div>
                        <div className="col-md-4 text-center mb-4 mb-md-0">
                          <div className="step-circle bg-dark border border-white mx-auto mb-3">2</div>
                          <h5>Search Cryptocurrencies</h5>
                          <p >Find specific coins or tokens using the search feature</p>
                        </div>
                        <div className="col-md-4 text-center">
                          <div className="step-circle bg-dark border border-white mx-auto mb-3">3</div>
                          <h5>Add to Favorites</h5>
                          <p>Create your personalized watchlist for quick access</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
        
              <section className="text-light">
                  <h1 className='text-center'>Ready to start tracking cryptocurrencies?</h1>
              </section>
        
              <section id="signup" className="py-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                      <h2 className="fw-bold mb-4">Join Crypto Hub Today</h2>
                      <p className="text-light mb-4">Sign up now to start tracking your favorite cryptocurrencies and get access to real-time market data.</p>
                      <form className="row g-3 justify-content-center">
                        <div className="col-md-8">
                          <input type="email" className="form-control form-control-lg" placeholder="Enter your email" />
                        </div>
                        <div className="col-md-4">
                          <button type="submit" className="btn btn-danger btn-lg w-100">Get Started</button>
                        </div>
                      </form>
                      <p className="mt-3 text-muted small">By signing up, you agree to our Terms of Service and Privacy Policy.</p>
                    </div>
                  </div>
                </div>
              </section>
        
              <footer className="bg-dark py-4">
                <div className="container">
                  <div className="row text-light">
                    <div className="col-lg-4 mb-4 mb-lg-0">
                      <h5 className="mb-3 text-white">Crypto Hub</h5>
                      <p>Your go-to platform for cryptocurrency tracking and market insights.</p>
                      <div className="d-flex gap-3 social-icons">
                        <a href="#" className="text-decoration-none text-white">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#" className="text-decoration-none text-white">
                          <i className="bi bi-twitter"></i>
                        </a>
                        <a href="#" className="text-decoration-none text-white">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="#" className="text-decoration-none text-white">
                          <i className="bi bi-github"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-2 col-6 mb-4 mb-lg-0">
                      <h6 className="mb-3 text-white">Company</h6>
                      <ul className="list-unstyled footer-links">
                        <li className="mb-2"><a href="#" className="text-decoration-none text-light">About Us</a></li>
                        <li className="mb-2"><a href="#" className="text-decoration-none text-light">Careers</a></li>
                        <li className="mb-2"><a href="#" className="text-decoration-none text-light">Blog</a></li>
                        <li><a href="#" className="text-decoration-none text-light">Press</a></li>
                      </ul>
                    </div>
                    
                    
                    <div className="col-lg-2 col-6">
                      <h6 className="mb-3 text-white">Contact</h6>
                      <ul className="list-unstyled footer-links">
                        <li className="mb-2"><a href="#" className="text-decoration-none text-light">Support</a></li>
                        <li><a href="#" className="text-decoration-none text-light">Contact Us</a></li>
                      </ul>
                    </div>
                  </div>
                  <hr className="my-4 bg-light" />
                  <div className="row text-light">
                    <div className="col-md-6 text-center text-md-start">
                      <p className="mb-0">&copy; 2025 Crypto Hub. All rights reserved.</p>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
    )
}

export default LandingPage