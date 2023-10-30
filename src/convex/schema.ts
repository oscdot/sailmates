import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  boats: defineTable({
    user: v.id('users'),
    name: v.string(),
    description: v.optional(v.string()),
    length: v.optional(v.number()),
    builtYear: v.optional(v.number()),
    manufacturer: v.optional(v.string()),
    boatType: v.optional(v.string()),
    engineType: v.optional(v.string()),
    hullMaterial: v.optional(v.string()),
    fuelType: v.optional(v.string()),
    isListedForSale: v.boolean(),
  }).index('by_user', ['user']),
  listings: defineTable({
    user: v.id('users'),
    boat: v.id('boats'),
    title: v.string(),
    description: v.string(),
    price: v.number(),
    currency: v.string(),
    location: v.string(),
  }).index('by_user', ['user']),
  users: defineTable({
    name: v.string(),
    boats: v.array(v.id('boats')),
    tokenIdentifier: v.string(),
  }).index('by_token', ['tokenIdentifier']),
});
