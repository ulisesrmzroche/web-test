import { Controller, Post } from '@overnightjs/core'
import { Request, Response } from 'express'
import { Inventory } from '../models/Inventory'

@Controller('inventories')
export class InventoriesController {
  @Post()
  private async add(req: Request, res: Response) {
    try {
      const inventory = new Inventory(req.body)
      inventory.save()
      return res.sendStatus(200)
    } catch (e) {
      return res.sendStatus(400)
    }
  }
}
