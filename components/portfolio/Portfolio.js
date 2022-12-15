import { useEffect, useMemo, useState } from 'react';
import { Project } from './Projects';

export const Portfolio = () => {
  const Projects = [
    {
      id: 1,
      image: '/mreeport.png',
      name: 'Portfolio',
      category: 'react',
    },
    {
      id: 2,
      image: '/clothing.png',
      category: 'figma',
      name: 'Clothing',
    },
    {
      id: 3,
      image: '/metaverse.png',
      name: 'metaverse',
      category: 'nextjs',
    },
  ];

  const [projectList, setProjectList] = useState([]);
  const [selectedCategory, SetSelectedCategory] = useState('');

  useEffect(() => {
    setProjectList(Projects);
  }, []);

  function getFilteredList() {
    if (!selectedCategory || selectedCategory == 'all') {
      return projectList;
    }
    return projectList.filter((item) => item.category === selectedCategory);
  }

  var filteredList = useMemo(getFilteredList, [selectedCategory, projectList]);

  function handleCategoryChange(event) {
    SetSelectedCategory(event.target.value);
  }
  console.log(selectedCategory);
  console.log(filteredList);
  return (
    <>
      <div className=" min-h-screen " id="portfolio">
        <div className="  w-full right-0  p-10 rounded-xl h-auto text-center shadow-2xl ">
          <h2 className="text-2xl mb-2 uppercase">Projects</h2>
          <div className=" flex gap-10 justify-center ">
            <button onClick={handleCategoryChange} value="all">
              All
            </button>
            <button onClick={handleCategoryChange} value="react">
              ReactJs
            </button>
            <button onClick={handleCategoryChange} value="nextjs">
              NextJs
            </button>
            <button onClick={handleCategoryChange} value="figma">
              Figma
            </button>
          </div>
          <div className="flex justify-around items-center  flex-wrap">
            {filteredList.map((element, index) => (
              <Project {...element} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
