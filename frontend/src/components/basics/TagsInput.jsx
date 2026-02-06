import React, { useState } from 'react'

function TagsInput({ tags = [], onTagsChange }) {
  const [inputValue, setInputValue] = useState('')

  const handleAddTag = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault()
      const newTags = [...tags, inputValue.trim()]
      onTagsChange(newTags)
      setInputValue('')
    }
  }

  const handleRemoveTag = (index) => {
    const newTags = tags.filter((_, i) => i !== index)
    onTagsChange(newTags)
  }

  return (
    <div className='w-full'>
      <div className='flex flex-wrap gap-2 p-2 rounded-md min-h-[50px] w-fit'>
        {tags.map((tag, index) => (
          <div
            key={index}
            className='flex items-center gap-2 bg-[#ECF0F1] text-[#2D3E50] px-3 py-1 rounded-full text-sm'
          >
            <span>{tag}</span>
            <button
              type="button"
              onClick={() => handleRemoveTag(index)}
              className='font-bold text-lg hover:opacity-70'
              aria-label={`Remove tag ${tag}`}
            >
              ×
            </button>
          </div>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleAddTag}
          placeholder='Skill tag +'
          className='flex-1 min-w-[200px] bg-transparent outline-none text-white'
        />
      </div>
    </div>
  )
}

export default TagsInput
