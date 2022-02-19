import images from './images'

function App() {
  return (
    <main className='bg-neutral-verylightgray flex flex-col justify-center pt-16 lg:pt-0'>
      <header className='text-center'>
        <h1 className='text-2xl md:text-4xl font-light'>Reliable, efficient delivery</h1>
        <h2 className='text-2xl md:text-4xl font-semibold'>Powered by Technology</h2>
        <p className='mt-6 w-3/5 md:w-3/5 m-auto text-sm md:text-base text-neutral-grayishblue'>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
      </header>
      <div className='mt-10 flex flex-wrap flew-col md:flex-nowrap lg:flex-row items-center justify-center w-full'>
        <div>
          <Card title='Supervisor' subtitle='Monitors activity to identify project roadblocks' icon={images.supervisorIcon} color='bg-primary-cyan' />
        </div>
        <div>
          <Card title='Team Builder' subtitle='Scans our talent network to create the optimal team for your project' icon={images.teamBuilderIcon} color='bg-primary-red'/>
          <Card title='Karma' subtitle='Regularly evaluates our talent to ensure quality' icon={images.karmaIcon} color='bg-primary-orange' />
        </div>
        <div>
          <Card title='Calculator' subtitle='Uses data from past projects to provide better delivery estimates' icon={images.calculatorIcon} color='bg-primary-blue' />
        </div>
      </div>
    </main>
  )
}


const Card = ({ title, subtitle, icon, color}) => {
  return (
    <div className={`m-4 w-96 h-64 pt-1 rounded-md ${color}`}>
      <div className='bg-white p-8 rounded-b-md shadow-xl w-full h-full flex flex-col justify-between'>
        <div>
          <h2 className='mb-3 text-lg font-semibold text-neutral-verydarkblue'>{title}</h2>
          <p className='text-sm text-neutral-grayishblue'>{subtitle}</p>
        </div>
        <div className='flex justify-end'>
          <img className='w-16 self-center' src={icon} alt='card icon' />
        </div>
      </div>
    </div>
  )
}


export default App
