import {
    Column,
    CreatedAt,
    DeletedAt,
    Model,
    PrimaryKey, Table,
    UpdatedAt,
    BelongsTo,
    ForeignKey,
  } from 'sequelize-typescript'
  import { Inventory } from '../models/Inventory'
  
  @Table({ tableName: 'reservations' })
  export class Reservation extends Model<Reservation> {
    @PrimaryKey
    @Column({ autoIncrement: true })
    id: number
  
    @Column
    name: string
  
    @Column
    email: string
  
    @Column
    party_size: string

    @Column
    reservation_date: string

    @Column
    reservation_time: string

    @DeletedAt
    deleted_at: string
  
    @CreatedAt
    created_at: string
  
    @UpdatedAt
    updated_at: string

    @ForeignKey(() => Inventory)
    @Column
    teamId: number

    @BelongsTo(() => Inventory)
    inventory: Inventory
  }
  