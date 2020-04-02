import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css';
import AsteriaBadge from './assets/logos/AsteriaBadge-Light.svg';
import Menu from './assets/icons/menu.svg';
import Search from './assets/icons/light/search.svg';
import Notifications from './assets/icons/notifications.svg'
import Apps from './assets/icons/apps.svg';
import Help from './assets/icons/help.svg';
import Person from './assets/icons/person.svg';

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props
    const unreadCount = 2;

    return (
          <div className={`${styles.Navigation__Spacer} ${styles.NavExpand__transition}`}>
            <div className={styles.Navigation__Container}>
              <div className={styles['Navigation__Wrapper-Collapsed']}>
                <div className={styles.NavActions__Wrapper}>
                  <div className={styles.Nav__PrimaryActions}>
                    <div className={styles['Nav__PrimaryActions--inner']}>
                      <div className={styles['Nav__PrimaryActions--logo']}>
                        <a>
                          <span className={styles.Logo__Wrapper}>
                            <img src={AsteriaBadge} alt="Asteria Emblem" />
                          </span>
                        </a>
                      </div>
                      <div className={styles['Nav__PrimaryActions--OtherItems']}>
                        <div className={styles['Nav__PrimaryActions--ItemInner']}>
                          <div className={styles['Nav__PrimaryItems--Trigger']}>
                            <button className={styles.Nav__PrimaryItem} type="button" aria-haspopup="true"
                              role="button">
                              <span className={styles['Nav__PrimaryItem--Wrapper']}>
                                <img src={Menu} alt="Menu" />
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className={`${styles['Nav__PrimaryActions--ItemInner']} ${styles.Margin_Top}`}>
                          <div className={styles['Nav__PrimaryItems--Trigger']}>
                            <button className={styles.Nav__PrimaryItem} type="button" aria-haspopup="true"
                              role="button">
                              <span className={styles['Nav__PrimaryItem--Wrapper']}>
                                <img src={Search} alt="Search" />
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.Nav__SecondaryActions}>
                    <div className={styles['Nav__SecondaryActions--inner']}>
                      <div className={styles['Nav__SecondaryActions--ItemInner']}>
                        <button className={styles.Nav__PrimaryItem} type="button" aria-haspopup="true" role="button">
                          <img src={Notifications} alt="Notifications" />
                          <div className={styles.Nav_NotificationCountWrapper}>
                            <span className={styles.Nav_NotificationCount}>{unreadCount}</span>
                          </div>
                        </button>
                      </div>
                      <div className={`${styles['Nav__SecondaryActions--ItemInner']} ${styles.Margin_Top}`}>
                        <button className={styles.Nav__PrimaryItem} type="button" aria-haspopup="true" role="button">
                          <img src={Apps} alt="Apps" />
                        </button>
                      </div>
                      <div>
                        <div className={`${styles['Nav__SecondaryActions--ItemInner']} ${styles.Margin_Top}`}>
                          <button className={styles.Nav__PrimaryItem} type="button" aria-haspopup="true" role="button">
                            <img src={Help} alt="Help" />
                          </button>
                        </div>
                        <div className={`${styles['Nav__SecondaryActions--ItemInner']} ${styles.Margin_Top}`}>
                          <button className={styles.Nav__PrimaryItem} type="button" aria-haspopup="true" role="button">
                            <img src={Person} alt="User" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
  }
}
