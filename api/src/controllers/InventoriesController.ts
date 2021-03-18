import { Controller, Post } from '@overnightjs/core'
import { Request, Response } from 'express'
import { Inventory } from '../models/Inventory'

@Controller('inventories')
export class InventoriesController {
  @Post()
  private async add(req: Request, res: Response) {
    try {
      const inventory = await Inventory.create(req.body)
      return res.status(201).json(inventory)
    } catch (e) {
      return res.sendStatus(400)
    }
  }
}
