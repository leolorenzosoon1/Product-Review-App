import React, {useContext} from 'react'
import {iCategory} from '../../types'
import {FilterContext} from '../../'
import styles from './FilterRadio.module.css'

interface iFilterRadioProps{
    categories:iCategory[]
}
const FilterRadio:React.FC<iFilterRadioProps> = ({categories = []})=> {
    const {filter, setFilter} = useContext(FilterContext)

    const optionsSet = new Set(categories.map((e: iCategory) => e.name)); //removes duplicates
    const options: string[] = Array.from(optionsSet);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>,option:any) => {
        setFilter((currState: string[]) => {
          if (currState.includes(option)) return currState.filter(item => item !== option);
          return [...currState, option];
        })};

return(<>
    {options.map( option => 
    <div className={styles.test}>
      <input
          className={styles.input}
          type="checkbox"
          checked={filter.includes(option)}
          onChange={(e) => {handleChange(e,option)}}
          
      />

    <label className={styles.label}>
        {option}
    </label>
    </div>
    
      
      )
      
      }
</>)

    }



export default FilterRadio