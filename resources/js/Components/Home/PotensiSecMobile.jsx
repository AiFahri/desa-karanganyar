import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Card from '../Card'
import { dummyPotensi } from '../../data/dummyPotensi'

const PotensiSecMobile = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const containerRef = useRef(null)
  const startX = useRef(0)
  const isDragging = useRef(false)
  
  const itemsPerPage = 2
  const totalPages = Math.ceil(dummyPotensi.length / itemsPerPage)
  
  const getCurrentItems = () => {
    const start = currentPage * itemsPerPage
    return dummyPotensi.slice(start, start + itemsPerPage)
  }
  
  const goToPage = (page) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page)
    }
  }
  
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX
    isDragging.current = true
  }
  
  const handleTouchMove = (e) => {
    if (!isDragging.current) return
    e.preventDefault()
  }
  
  const handleTouchEnd = (e) => {
    if (!isDragging.current) return
    
    const endX = e.changedTouches[0].clientX
    const diff = startX.current - endX
    const threshold = 50
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentPage < totalPages - 1) {
        goToPage(currentPage + 1)
      } else if (diff < 0 && currentPage > 0) {
        goToPage(currentPage - 1)
      }
    }
    
    isDragging.current = false
  }
  
  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current, 
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" }
      )
    }
  }, [currentPage])

  return (
    <section className="md:hidden relative py-12 bg-white">
      <div className="container mx-auto px-4">
        <div 
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div ref={containerRef} className="flex justify-between">
            {getCurrentItems().map((item) => (
              <Card
                key={item.id}
                title={item.title}
                description={item.deskripsi_singkat}
                image={item.image}
              />
            ))}
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentPage 
                  ? 'bg-[#0272BA] scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex justify-between items-center mt-0 px-4">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 0}
            className={`p-2 rounded-full -ml-10 -mt-[40vh] z-40 transition-all duration-300 ${
              currentPage === 0 
                ? 'text-gray-300 cursor-not-allowed' 
                : 'text-[#0272BA] hover:bg-[#0272BA] hover:text-white'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <span className="text-sm text-gray-600">
            {currentPage + 1} / {totalPages}
          </span>
          
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
            className={`p-2 rounded-full -mr-10 -mt-[40vh] z-40 transition-all duration-300 ${
              currentPage === totalPages - 1 
                ? 'text-gray-300 cursor-not-allowed' 
                : 'text-[#0272BA] hover:bg-[#0272BA] hover:text-white'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default PotensiSecMobile
