import React from 'react'

function UnitOfMeasurement() {
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
                    <span className='badge badge-pill gradient-1'></span>
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
                <li className='icons dropdown d-none d-md-flex'>
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
                </li>
                <li className='icons dropdown'>
                  <div
                    className='user-img c-pointer position-relative'
                    data-toggle='dropdown'
                  >
                    <span className='activity active' />
                    <img src='images/user/1.png' height={40} width={40} alt />
                  </div>
                  <div className='drop-down dropdown-profile animated fadeIn dropdown-menu'>
                    <div className='dropdown-content-body'>
                      <ul>
                        <li>
                          <a href='app-profile.html'>
                            <i className='icon-user' /> <span>Profile</span>
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='icon-envelope-open' />{' '}
                            <span>Inbox</span>{' '}
                            <div className='badge gradient-3 badge-pill gradient-1'>
                              3
                            </div>
                          </a>
                        </li>
                        <hr className='my-2' />
                        <li>
                          <a href='page-lock.html'>
                            <i className='icon-lock' /> <span>Lock Screen</span>
                          </a>
                        </li>
                        <li>
                          <a href='page-login.html'>
                            <i className='icon-key' /> <span>Logout</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='nk-sidebar'>
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
                  <span className='nav-text'>Unit Of Measurement</span>
                </a>
              </li>
              <li>
                <a href='#' aria-expanded='false'>
                  <i className='icon-screen-tablet menu-icon' />
                  <span className='nav-text'>KeyWords</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class='content-body'>
          <div class='row page-titles mx-0'>
            <div class='col p-md-0'>
              <ol class='breadcrumb'>
                <li class='breadcrumb-item'>
                  <a href='#'>Dashboard</a>
                </li>
                <li class='breadcrumb-item active'>
                  <a href='#'>Home</a>
                </li>
              </ol>
            </div>
          </div>
          <div class='container-fluid'>
            <div class='row'>
              <div class='col-12'>
                <div class='card'>
                  <div class='card-body'>
                    <div class='d-flex justify-content-between align-items-center mb-3'>
                      <h4 class='card-title'>Unit Of Measurement</h4>
                      <button
                        type='button'
                        class='btn btn-primary'
                        data-toggle='modal'
                        data-target='#addUnitModal'
                      >
                        Add New
                      </button>
                    </div>
                    <div class='table-responsive'>
                      <table class='table table-striped table-bordered zero-configuration'>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011/04/25</td>
                            <td>$320,800</td>
                          </tr>
                          <tr>
                            <td>Garrett Winters</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>63</td>
                            <td>2011/07/25</td>
                            <td>$170,750</td>
                          </tr>
                        </tbody>
                        <tfoot></tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Add Unit Modal --> */}
          <div
            class='modal fade'
            id='addUnitModal'
            tabindex='-1'
            role='dialog'
            aria-labelledby='addUnitModalLabel'
            aria-hidden='true'
          >
            <div class='modal-dialog' role='document'>
              <div class='modal-content'>
                <form>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='addUnitModalLabel'>
                      Add New Unit of Measurement
                    </h5>
                    <button
                      type='button'
                      class='close'
                      data-dismiss='modal'
                      aria-label='Close'
                    >
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <div class='form-group'>
                      <label for='unitName'>Unit Name</label>
                      <input
                        type='text'
                        className='form-control'
                        id='unitName'
                        placeholder='Enter Unit Name'
                      />
                    </div>
                  </div>
                  <div class='modal-footer'>
                    <button
                      type='button'
                      class='btn btn-secondary'
                      data-dismiss='modal'
                    >
                      Close
                    </button>
                    <button type='submit' class='btn btn-primary'>
                      Save changes
                    </button>
                  </div>
                </form>
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

export default UnitOfMeasurement
