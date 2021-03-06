import * as sdk from 'botpress/sdk'
import { Config as CoreConfig } from 'common/nlu/engine'
import { Config as ModConfig } from '../../config'
import legacyElectionPipeline from './legacy-election'
import naturalElectionPipeline from './natural-election'

export function election(input: sdk.IO.EventUnderstanding, config: CoreConfig | ModConfig) {
  if (config.legacyElection) {
    return legacyElectionPipeline(input)
  }
  return naturalElectionPipeline(input)
}
