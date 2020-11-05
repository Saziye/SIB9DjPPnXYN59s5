import React from 'react'
import { Counter } from '../'

const CounterList = ({ counters }) =>
    <div className="row mt-3">
        {counters.map(counter =>
            <Counter key={counter.id} counter={counter} />
        )}
    </div>;

export default CounterList
