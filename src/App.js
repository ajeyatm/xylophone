import React, { useState } from 'react'
import './App.scss'
import notes from './assests/notes'

// const tunes = notes.map((note) => new Audio(note.file))

const ListNotes = ({ note, addToPlayedNotes, order }) => {
	const onClickHandler = (e) => {
		e.preventDefault()
		addToPlayedNotes(note)
	}
	const height = 260 - order * 20
	const padding = 60 - order * 20
	return (
		<button
			className='note'
			onClick={onClickHandler}
			style={{ backgroundColor: note.color, height: `${height}px` }}
		>
			<p style={{ padding: `${padding}px 0` }}>{note.name}</p>
		</button>
	)
}

function App() {
	const [playedNotes, setPlayedNotes] = useState([])
	const [playBtn, setPlayBtn] = useState(false)
	// const [displayTune, setDisplayTune] = useState('')

	const addToPlayedNotes = (note) => {
		new Audio(note.file).play()
		setPlayedNotes([...playedNotes, { name: note.name, file: note.file }])
		// setDisplayTune(displayTune + note.name)
	}

	const playNotes = (e) => {
		e.preventDefault()

		if (playedNotes.length === 0) return

		setPlayBtn(true)
		playedNotes.forEach((note, index) => {
			setTimeout(() => {
				if (index === playedNotes.length - 1) {
					setPlayBtn(false)
				}
				new Audio(note.file).play()
			}, 500 * index)
		})
	}

	// const onChangeHandler = (e) => {
	// 	e.preventDefault()
	// 	setDisplayTune(e.target.value)
	// 	setNote(e.target.value)
	// }

	// const setNote = (value) => {
	// 	console.log(value)
	// 	let newTunes = []
	// 	for (let i = 0; i < value.length; i++) {
	// 		const noteNeeded = notes.filter((n) => n.name === value[i])
	// 		console.log(noteNeeded)
	// 		console.log(noteNeeded.name, noteNeeded.file)
	// 		newTunes.push({ name: noteNeeded.name, file: noteNeeded.file })
	// 	}

	// }

	const removeLastNote = () => {
		let notes = playedNotes
		notes.pop()
		setPlayedNotes([...notes])
	}

	const clearHandler = (e) => {
		e.preventDefault()
		setPlayedNotes([])
		setPlayBtn(false)
	}

	return (
		<div className='App'>
			<h2 className='header'>Xylophone</h2>
			<div className='notes'>
				{notes.map((note, index) => (
					<ListNotes
						key={index}
						order={index}
						note={note}
						addToPlayedNotes={addToPlayedNotes}
					/>
				))}
			</div>
			<div className='notes-display'>
				<textarea
					className='note-letter'
					type='text'
					value={playedNotes.map((n) => n.name).join(' ')}
					readOnly={true}
				/>
			</div>

			<div className='controls'>
				<button onClick={playNotes} disabled={playBtn} className='btn'>
					{playBtn ? 'Playing' : 'Play'}
				</button>

				<button
					onClick={removeLastNote}
					className='btn'
					style={{ width: '130px' }}
				>
					Remove Lastnote
				</button>

				<button onClick={clearHandler} className='btn'>
					Clear
				</button>
			</div>
		</div>
	)
}

export default App
