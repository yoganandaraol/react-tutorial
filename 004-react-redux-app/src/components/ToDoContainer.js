import React from"react"
import TaskContainer from './TaskContainer'
import HooksTaskContainer from './HooksTaskContainer'
import ReminderContainer from './ReminderContainer'
import SuperTaskContainer from './SuperTaskContainer'
import ItemContainer from './ItemContainer'

function ToDoContainer(){
    return(
        <div>
        <ItemContainer />
          <ItemContainer task />

          <HooksTaskContainer />
          <hr />
          <TaskContainer />
          <hr />
          <SuperTaskContainer />
          <hr />
          <ReminderContainer />
          <hr />
          </div>
    )
}

export default ToDoContainer;