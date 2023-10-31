import PropTypes from 'prop-types';
import css from './Statistics.module.css'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .toUpperCase()}`;
}

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
           {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.statlist}>
                {stats.map(({ id, label, percentage }) => {
                  return (<li key={id}
                    className={css.item}
                  style = {{backgroundColor: getRandomHexColor()}}>
            <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
                    </li>)

        })}
            </ul>
    </section>
        
    )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
