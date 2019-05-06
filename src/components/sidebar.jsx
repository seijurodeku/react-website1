import React, { Component } from 'react'

export default class Sidebar extends Component {
  render () {
    return (
      <div>
        <div>
          <a
            href='#'
            className='js-colorlib-nav-toggle colorlib-nav-toggle'
            data-toggle='collapse'
            data-target='#navbar'
            aria-expanded='false'
            aria-controls='navbar'
          >
            <i />
          </a>
          <aside
            id='colorlib-aside'
            role='complementary'
            className='border js-fullheight'
          >
            <div className='text-center'>
              <div
                className='author-img'
                style={{ backgroundImage: 'url(images/about.jpg)' }}
              />
              <h1 id='colorlib-logo'>
                <a href='index.html'>Dhruv Barochiya</a>
              </h1>
              <span className='email'>
                <i className='icon-mail' /> Dhruv.barochiya34788@gmail.com
              </span>
              <span className='number'>
                <i className='icon-phone' /> +91-886-600-5687
              </span>
            </div>
            <nav id='colorlib-main-menu' role='navigation' className='navbar'>
              <div id='navbar' className='collapse'>
                <ul>
                  <li className='active'>
                    <a href='#' data-nav-section='home'>
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href='#' data-nav-section='about'>
                      About
                    </a>
                  </li>
                  {/* <li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li> */}
                  <li>
                    <a href='#' data-nav-section='timeline'>
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id='colorlib-main-menu'>
              <ul>
                <li>
                  <a
                    href='https://www.facebook.com/dhruv.barochia'
                    target='_blank'
                  >
                    <i className='icon-facebook2' />
                  </a>
                </li>
                <li>
                  <a href='https://twitter.com/ddbarochiya' target='_blank'>
                    <i className='icon-twitter2' />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.instagram.com/ddbarochiya/'
                    target='_blank'
                  >
                    <i className='icon-instagram' />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/dhruv-b-545b52a9/'
                    target='_blank'
                  >
                    <i className='icon-linkedin2' />
                  </a>
                </li>
                <li>
                  <a href='https://github.com/Dhruv34788' target='_blank'>
                    <i className='icon-github' />
                  </a>
                </li>
                <li>
                  <a
                    href='https://medium.com/@dhruv.barochia34788'
                    target='_blank'
                  >
                    <i className='icon-blogger2' />
                  </a>
                </li>
              </ul>
            </nav>
            <div className='colorlib-footer'>
              <p>
                <small>
                  Made with <i className='icon-heart' aria-hidden='true' /> and{' '}
                  <i className='icon-beer' aria-hidden='true' />
                  <br />
                  Thanks{' '}
                  <a href='https://colorlib.com' target='_blank'>
                    Colorlib
                  </a>{' '}
                  for inspiration
                </small>
              </p>
              <p>
                <small>Automated deployment on gh-pages using Travis-CI</small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
