import React from 'react'
import { Link } from 'react-router-dom'

function AdminDashboard() {
  return (
    <div>
      <div id='preloader'>
        <div className='loader'>
          <svg className='circular' viewBox='25 25 50 50'>
            <circle
              className='path'
              cx={50}
              cy={50}
              r={20}
              fill='none'
              strokeWidth={3}
              strokeMiterlimit={10}
            />
          </svg>
        </div>
      </div>
      <div id='main-wrapper'>
        <div className='nav-header'>
          <div className='brand-logo'>
            <a href='index.html'>
              <b className='logo-abbr'>
                <img src='./theme/images/logo.png' alt='' />{' '}
              </b>
              <span className='logo-compact'>
                <img src='./theme/images/logo-compact.png' alt='' />
              </span>
              <span className='brand-title'>
                <img src='images/logo-text.png' alt='' />
              </span>
            </a>
          </div>
        </div>
        <div className='header'>
          <div className='header-content clearfix'>
            <div className='nav-control'>
              <div className='hamburger'>
                <span className='toggle-icon'>
                  <i className='icon-menu' />
                </span>
              </div>
            </div>
            <div className='header-left'>
              <div className='input-group icons'>
                <div className='input-group-prepend'>
                  <span
                    className='input-group-text bg-transparent border-0 pr-2 pr-sm-3'
                    id='basic-addon1'
                  >
                    <i className='mdi mdi-magnify' />
                  </span>
                </div>
                <input
                  type='search'
                  className='form-control'
                  placeholder='Search Dashboard'
                  aria-label='Search Dashboard'
                />
                <div className='drop-down animated flipInX d-md-none'>
                  <form action='#'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Search'
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className='header-right'>
              <ul className='clearfix'>
                <li className='icons dropdown'>
                  <a href='#' data-toggle='dropdown'>
                    <i className='mdi mdi-email-outline' />
                    <span className='badge badge-pill gradient-1'>3</span>
                  </a>
                  <div className='drop-down animated fadeIn dropdown-menu'>
                    <div className='dropdown-content-heading d-flex justify-content-between'>
                      <span className>3 New Messages</span>
                      <a href='#' className='d-inline-block'>
                        <span className='badge badge-pill gradient-1'>3</span>
                      </a>
                    </div>
                    <div className='dropdown-content-body'>
                      <ul>
                        <li className='notification-unread'>
                          <a href='#'>
                            <img
                              className='float-left mr-3 avatar-img'
                              src='./theme/images/avatar/1.jpg'
                              alt
                            />
                            <div className='notification-content'>
                              <div className='notification-heading'>
                                Saiful Islam
                              </div>
                              <div className='notification-timestamp'>
                                08 Hours ago
                              </div>
                              <div className='notification-text'>
                                Hi Teddy, Just wanted to let you ...
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className='notification-unread'>
                          <a href='#'>
                            <img
                              className='float-left mr-3 avatar-img'
                              src='./theme/images/avatar/2.jpg'
                              alt
                            />
                            <div className='notification-content'>
                              <div className='notification-heading'>
                                Adam Smith
                              </div>
                              <div className='notification-timestamp'>
                                08 Hours ago
                              </div>
                              <div className='notification-text'>
                                Can you do me a favour?
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <img
                              className='float-left mr-3 avatar-img'
                              src='./theme/images/avatar/3.jpg'
                              alt
                            />
                            <div className='notification-content'>
                              <div className='notification-heading'>
                                Barak Obama
                              </div>
                              <div className='notification-timestamp'>
                                08 Hours ago
                              </div>
                              <div className='notification-text'>
                                Hi Teddy, Just wanted to let you ...
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <img
                              className='float-left mr-3 avatar-img'
                              src='./theme/images/avatar/4.jpg'
                              alt
                            />
                            <div className='notification-content'>
                              <div className='notification-heading'>
                                Hilari Clinton
                              </div>
                              <div className='notification-timestamp'>
                                08 Hours ago
                              </div>
                              <div className='notification-text'>Hello</div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className='icons dropdown'>
                  <a href='#' data-toggle='dropdown'>
                    <i className='mdi mdi-bell-outline' />
                    <span className='badge badge-pill gradient-2'>3</span>
                  </a>
                  <div className='drop-down animated fadeIn dropdown-menu dropdown-notfication'>
                    <div className='dropdown-content-heading d-flex justify-content-between'>
                      <span className>2 New Notifications</span>
                      <a href='#' className='d-inline-block'>
                        <span className='badge badge-pill gradient-2'>5</span>
                      </a>
                    </div>
                    <div className='dropdown-content-body'>
                      <ul>
                        <li>
                          <a href='#'>
                            <span className='mr-3 avatar-icon bg-success-lighten-2'>
                              <i className='icon-present' />
                            </span>
                            <div className='notification-content'>
                              <h6 className='notification-heading'>
                                Events near you
                              </h6>
                              <span className='notification-text'>
                                Within next 5 days
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <span className='mr-3 avatar-icon bg-danger-lighten-2'>
                              <i className='icon-present' />
                            </span>
                            <div className='notification-content'>
                              <h6 className='notification-heading'>
                                Event Started
                              </h6>
                              <span className='notification-text'>
                                One hour ago
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <span className='mr-3 avatar-icon bg-success-lighten-2'>
                              <i className='icon-present' />
                            </span>
                            <div className='notification-content'>
                              <h6 className='notification-heading'>
                                Event Ended Successfully
                              </h6>
                              <span className='notification-text'>
                                One hour ago
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <span className='mr-3 avatar-icon bg-danger-lighten-2'>
                              <i className='icon-present' />
                            </span>
                            <div className='notification-content'>
                              <h6 className='notification-heading'>
                                Events to Join
                              </h6>
                              <span className='notification-text'>
                                After two days
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                {/* Admin with Dropdown */}
                {/* <li className='icons dropdown d-none d-md-flex'>
                  <a href='#' className='log-user' data-toggle='dropdown'>
                    <span>Admin</span>{' '}
                    <i className='fa fa-angle-down f-s-14' aria-hidden='true' />
                  </a>
                  <div className='drop-down dropdown-language animated fadeIn  dropdown-menu'>
                    <div className='dropdown-content-body'>
                      <ul>
                        <li>
                          <a href='#'>Logout</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li> */}
                <li className='icons dropdown'>
                  <div
                    className='user-img c-pointer position-relative'
                    data-toggle='dropdown'
                  >
                    <span className='activity active' />
                    <img
                      src='./theme/images/user/1.png'
                      height={40}
                      width={40}
                      alt
                    />
                  </div>
                  <div className='drop-down dropdown-profile animated fadeIn dropdown-menu'>
                    <div className='dropdown-content-body'>
                      <ul>
                        <li>
                          <Link to=''>
                            <i className='icon-user' /> <span>Profile</span>
                          </Link>
                        </li>
                        <li>
                          <Link to='/inbox'>
                            <i className='icon-envelope-open' />{' '}
                            <span>Inbox</span>{' '}
                            <div className='badge gradient-3 badge-pill gradient-1'>
                              3
                            </div>
                          </Link>
                        </li>
                        <hr className='my-2' />
                        {/* Uncomment this if you want to include Lock Screen */}
                        {/* <li>
          <Link to='/lock-screen'>
            <i className='icon-lock' /> <span>Lock Screen</span>
          </Link>
        </li> */}
                        <li>
                          <Link to='/login'>
                            <i className='icon-key' /> <span>Logout</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='nk-sidebar' bg-gray>
          <div className='nk-nav-scroll'>
            <ul className='metismenu' id='menu'>
              <li className='nav-label'>Categories</li>
              <li>
                <a href='#' aria-expanded='false'>
                  <i className='icon-graph menu-icon' />{' '}
                  <span className='nav-text'>Unit of Measurement</span>
                </a>
              </li>
              <li className='mega-menu mega-menu-sm'>
                <a href='#' aria-expanded='false'>
                  <i className='icon-globe-alt menu-icon' />
                  <span className='nav-text'>Categories</span>
                </a>
                {/* <ul aria-expanded='false'>
                  <li>
                    <a href='./layout-blank.html'>Blank</a>
                  </li>
                  <li>
                    <a href='./layout-one-column.html'>One Column</a>
                  </li>
                  <li>
                    <a href='./layout-two-column.html'>Two column</a>
                  </li>
                  <li>
                    <a href='./layout-compact-nav.html'>Compact Nav</a>
                  </li>
                  <li>
                    <a href='./layout-vertical.html'>Vertical</a>
                  </li>
                  <li>
                    <a href='./layout-horizontal.html'>Horizontal</a>
                  </li>
                  <li>
                    <a href='./layout-boxed.html'>Boxed</a>
                  </li>
                  <li>
                    <a href='./layout-wide.html'>Wide</a>
                  </li>
                  <li>
                    <a href='./layout-fixed-header.html'>Fixed Header</a>
                  </li>
                  <li>
                    <a href='layout-fixed-sidebar.html'>Fixed Sidebar</a>
                  </li>
                </ul> */}
              </li>
              {/* <li className='nav-label'>Apps</li> */}
              {/* <li>
                <a className='has-arrow' href='#' aria-expanded='false'>
                  <i className='icon-envelope menu-icon' />{' '}
                  <span className='nav-text'>Email</span>
                </a>
                <ul aria-expanded='false'>
                  <li>
                    <a href='./email-inbox.html'>Inbox</a>
                  </li>
                  <li>
                    <a href='./email-read.html'>Read</a>
                  </li>
                  <li>
                    <a href='./email-compose.html'>Compose</a>
                  </li>
                </ul>
              </li> */}
              <li>
                <a href='#' aria-expanded='false'>
                  <i className='icon-screen-tablet menu-icon' />
                  <span className='nav-text'>KeyWords</span>
                </a>
                <ul aria-expanded='false'>
                  <li>
                    <a href='./app-profile.html'>Profile</a>
                  </li>
                  <li>
                    <a href='./app-calender.html'>Calender</a>
                  </li>
                </ul>
              </li>
              {/* <li>
                <a href='#' aria-expanded='false'>
                  <i className='icon-graph menu-icon' />{' '}
                  <span className='nav-text'>Charts</span>
                </a>
              </li> */}
              {/* <li className='nav-label'>UI Components</li> */}
            </ul>
          </div>
        </div>
        <div className='content-body'>
          <div className='container-fluid mt-3'>
            <div className='row'>
              <div className='col-lg-3 col-sm-6'>
                <div className='card gradient-1'>
                  <div className='card-body'>
                    <h3 className='card-title text-white'>Total Products</h3>
                    <div className='d-inline-block'>
                      <h2 className='text-white'>4565</h2>
                      <p className='text-white mb-0'>Jan - March 2024</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-sm-6'>
                <div className='card gradient-2'>
                  <div className='card-body'>
                    <h3 className='card-title text-white'>Total Posts</h3>
                    <div className='d-inline-block'>
                      <h2 className='text-white'>8541</h2>
                      <p className='text-white mb-0'>Jan - March 2024</p>
                    </div>
                    {/* <span className='float-right display-5 opacity-5'>
                      <i className='fa fa-money' />
                    </span> */}
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-sm-6'>
                <div className='card gradient-3'>
                  <div className='card-body'>
                    <h3 className='card-title text-white'>Client Visited</h3>
                    <div className='d-inline-block'>
                      <h2 className='text-white'>4565</h2>
                      <p className='text-white mb-0'>Jan - March 2024</p>
                    </div>
                    {/* <span className='float-right display-5 opacity-5'>
                      <i className='fa fa-users' />
                    </span> */}
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-sm-6'>
                <div className='card gradient-4'>
                  <div className='card-body'>
                    <h3 className='card-title text-white'>
                      Companies Registered
                    </h3>
                    <div className='d-inline-block'>
                      <h2 className='text-white'>99%</h2>
                      <p className='text-white mb-0'>Jan - March 2024</p>
                    </div>
                    {/* <span className='float-right display-5 opacity-5'>
                      <i className='fa fa-heart' />
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='row'>
                  <div className='col-12'>
                    <div className='card'>
                      {/* <div className='card-body pb-0 d-flex justify-content-between'>
                        <div>
                          <h4 className='mb-1'>Product Sales</h4>
                          <p>Total Earnings of the Month</p>
                          <h3 className='m-0'>$ 12,555</h3>
                        </div>
                        <div>
                          <ul>
                            <li className='d-inline-block mr-3'>
                              <a className='text-dark' href='#'>
                                Day
                              </a>
                            </li>
                            <li className='d-inline-block mr-3'>
                              <a className='text-dark' href='#'>
                                Week
                              </a>
                            </li>
                            <li className='d-inline-block'>
                              <a className='text-dark' href='#'>
                                Month
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div> */}
                      {/* <div className='chart-wrapper'>
                        <canvas id='chart_widget_2' />
                      </div> */}
                      {/* <div className='card-body'>
                        <div className='d-flex justify-content-between'>
                          <div className='w-100 mr-2'>
                            <h6>Pixel 2</h6>
                            <div className='progress' style={{ height: 6 }}>
                              <div
                                className='progress-bar bg-danger'
                                style={{ width: '40%' }}
                              />
                            </div>
                          </div>
                          <div className='ml-2 w-100'>
                            <h6>iPhone X</h6>
                            <div className='progress' style={{ height: 6 }}>
                              <div
                                className='progress-bar bg-primary'
                                style={{ width: '80%' }}
                              />
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer'>
          <div className='copyright'>
            <p>
              Copyright B2B portal &amp; Developed by{' '}
              <a href='https://themeforest.net/user/quixlab'>B2B</a> 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
