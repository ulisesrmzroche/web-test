import {
    Column,
    CreatedAt,
    DeletedAt,
    Model,
    PrimaryKey, Table,
    UpdatedAt,
    HasMany
  } from 'sequelize-typescript'

  import { Reservation } from './Reservation'
  
  @Table({ tableName: 'inventories' })
  export class Inventory extends Model<Inventory> {
    @PrimaryKey
    @Column({ autoIncrement: true })
    id: number
  
    @Column
    morning_reservations_count: string
  
    @Column
    afternoon_reservations_count: string
  
    @Column
    evening_reservations_count: string

    @Column
    reservation_date: string
  
    @DeletedAt
    deleted_at: string
    
    @CreatedAt
    created_at: string
  
    @UpdatedAt
    updated_at: string

    @HasMany(() => Reservation)
    reservations: Reservation[]

  }
  