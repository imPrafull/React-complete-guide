import { useState } from 'react'

import { EXAMPLES } from '../data'
import TabButton from './TabButton'
import Section from './Section'
import Tabs from './Tabs'

export default function Examples() {
    const [ selectedTopic, setSelectedTopic ] = useState()

    function handleSelect(selectedButton) {
        // selectedButton => 'components', 'jsx', 'props', 'state'
        setSelectedTopic(selectedButton)
        console.log(selectedTopic)
    }

    return (
        <Section title='Examples' id='examples'>
            <Tabs buttons={<>
                <TabButton onClick={() => handleSelect('components')} isSelected={ selectedTopic === 'components'}>Components</TabButton>
                <TabButton onClick={() => handleSelect('jsx')} isSelected={ selectedTopic === 'jsx'}>JSX</TabButton>
                <TabButton onClick={() => handleSelect('props')} isSelected={ selectedTopic === 'props'}>Props</TabButton>
                <TabButton onClick={() => handleSelect('state')} isSelected={ selectedTopic === 'state'}>State</TabButton>
            </>}>
                {!selectedTopic ? (
                    <p>Please select a topic.</p>
                ) : (
                    <div id='tab-content'>
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                    </pre>
                </div>
                )}
            </Tabs>
        </Section>
    )
}