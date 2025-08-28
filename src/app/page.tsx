'use client';

import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { v4 as uuidv4 } from 'uuid';
import dynamic from 'next/dynamic';

const NewTicketForm = dynamic(
  () => import('../components/NewTicketForm'),
  { ssr: false }
);

type TicketStatus = 'backlog' | 'in_progress' | 'in_review' | 'completed';

interface Ticket {
  id: string;
  title: string;
  description: string;
  customerName: string;
  bikeModel: string;
  status: TicketStatus;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  updatedAt: Date;
}

const statusConfig = {
  backlog: { title: 'Backlog', color: 'bg-gray-200' },
  in_progress: { title: 'In Progress', color: 'bg-blue-200' },
  in_review: { title: 'In Review', color: 'bg-yellow-200' },
  completed: { title: 'Completed', color: 'bg-green-200' },
} as const;

export default function KanbanBoard() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [tickets, setTickets] = useState<Ticket[]>([
    {
      id: '1',
      title: 'Fix flat tire',
      description: 'Customer reported a flat tire on their mountain bike',
      customerName: 'John Doe',
      bikeModel: 'Trek Marlin 5',
      status: 'in_progress',
      priority: 'high',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '2',
      title: 'Annual tune-up',
      description: 'Regular maintenance service',
      customerName: 'Jane Smith',
      bikeModel: 'Specialized Sirrus',
      status: 'backlog',
      priority: 'medium',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;
    if (source.droppableId === destination.droppableId) return;

    setTickets(prevTickets =>
      prevTickets.map(ticket =>
        ticket.id === draggableId
          ? { ...ticket, status: destination.droppableId as TicketStatus }
          : ticket
      )
    );
  };

  const getTicketsByStatus = (status: TicketStatus) =>
    tickets.filter(ticket => ticket.status === status);

  const handleAddTicket = (data: Omit<Ticket, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newTicket: Ticket = {
      ...data,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setTickets(prev => [...prev, newTicket]);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Service Tickets</h1>
        <button 
          onClick={() => setIsFormOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" />
          New Ticket
        </button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(statusConfig).map(([status, { title, color }]) => (
            <div key={status} className="bg-gray-50 rounded-lg shadow">
              <div className={`${color} px-4 py-2 rounded-t-lg`}>
                <h2 className="text-sm font-medium text-gray-900">{title}</h2>
                <span className="text-xs text-gray-600">
                  {getTicketsByStatus(status as TicketStatus).length} tickets
                </span>
              </div>
              <Droppable droppableId={status}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="p-2 min-h-[100px]"
                  >
                    {getTicketsByStatus(status as TicketStatus).map((ticket, index) => (
                      <Draggable
                        key={ticket.id}
                        draggableId={ticket.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-white p-3 mb-2 rounded shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                          >
                            <div className="flex justify-between items-start">
                              <h3 className="font-medium text-gray-900">{ticket.title}</h3>
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                                {ticket.priority}
                              </span>
                            </div>
                            <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                              {ticket.description}
                            </p>
                            <div className="mt-2 text-xs text-gray-500">
                              {ticket.customerName} • {ticket.bikeModel}
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>

      {isFormOpen && (
        <NewTicketForm
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleAddTicket}
        />
      )}
    </div>
  );
}
