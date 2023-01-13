import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  ObjectID: any;
};

export type Address = {
  __typename?: 'Address';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type Capsule = {
  __typename?: 'Capsule';
  dragon?: Maybe<Dragon>;
  id?: Maybe<Scalars['ID']>;
  landings?: Maybe<Scalars['Int']>;
  missions?: Maybe<Array<Maybe<CapsuleMission>>>;
  original_launch?: Maybe<Scalars['Date']>;
  reuse_count?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type CapsuleMission = {
  __typename?: 'CapsuleMission';
  flight?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type CapsulesFind = {
  id?: InputMaybe<Scalars['ID']>;
  landings?: InputMaybe<Scalars['Int']>;
  mission?: InputMaybe<Scalars['String']>;
  original_launch?: InputMaybe<Scalars['Date']>;
  reuse_count?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type Core = {
  __typename?: 'Core';
  asds_attempts?: Maybe<Scalars['Int']>;
  asds_landings?: Maybe<Scalars['Int']>;
  block?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  missions?: Maybe<Array<Maybe<CapsuleMission>>>;
  original_launch?: Maybe<Scalars['Date']>;
  reuse_count?: Maybe<Scalars['Int']>;
  rtls_attempts?: Maybe<Scalars['Int']>;
  rtls_landings?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  water_landing?: Maybe<Scalars['Boolean']>;
};

export type CoreMission = {
  __typename?: 'CoreMission';
  flight?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type CoresFind = {
  asds_attempts?: InputMaybe<Scalars['Int']>;
  asds_landings?: InputMaybe<Scalars['Int']>;
  block?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  missions?: InputMaybe<Scalars['String']>;
  original_launch?: InputMaybe<Scalars['Date']>;
  reuse_count?: InputMaybe<Scalars['Int']>;
  rtls_attempts?: InputMaybe<Scalars['Int']>;
  rtls_landings?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  water_landing?: InputMaybe<Scalars['Boolean']>;
};

export type Distance = {
  __typename?: 'Distance';
  feet?: Maybe<Scalars['Float']>;
  meters?: Maybe<Scalars['Float']>;
};

export type Dragon = {
  __typename?: 'Dragon';
  active?: Maybe<Scalars['Boolean']>;
  crew_capacity?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  diameter?: Maybe<Distance>;
  dry_mass_kg?: Maybe<Scalars['Int']>;
  dry_mass_lb?: Maybe<Scalars['Int']>;
  first_flight?: Maybe<Scalars['String']>;
  heat_shield?: Maybe<DragonHeatShield>;
  height_w_trunk?: Maybe<Distance>;
  id?: Maybe<Scalars['ID']>;
  launch_payload_mass?: Maybe<Mass>;
  launch_payload_vol?: Maybe<Volume>;
  name?: Maybe<Scalars['String']>;
  orbit_duration_yr?: Maybe<Scalars['Int']>;
  pressurized_capsule?: Maybe<DragonPressurizedCapsule>;
  return_payload_mass?: Maybe<Mass>;
  return_payload_vol?: Maybe<Volume>;
  sidewall_angle_deg?: Maybe<Scalars['Float']>;
  thrusters?: Maybe<Array<Maybe<DragonThrust>>>;
  trunk?: Maybe<DragonTrunk>;
  type?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type DragonHeatShield = {
  __typename?: 'DragonHeatShield';
  dev_partner?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  size_meters?: Maybe<Scalars['Float']>;
  temp_degrees?: Maybe<Scalars['Int']>;
};

export type DragonPressurizedCapsule = {
  __typename?: 'DragonPressurizedCapsule';
  payload_volume?: Maybe<Volume>;
};

export type DragonThrust = {
  __typename?: 'DragonThrust';
  amount?: Maybe<Scalars['Int']>;
  fuel_1?: Maybe<Scalars['String']>;
  fuel_2?: Maybe<Scalars['String']>;
  pods?: Maybe<Scalars['Int']>;
  thrust?: Maybe<Force>;
  type?: Maybe<Scalars['String']>;
};

export type DragonTrunk = {
  __typename?: 'DragonTrunk';
  cargo?: Maybe<DragonTrunkCargo>;
  trunk_volume?: Maybe<Volume>;
};

export type DragonTrunkCargo = {
  __typename?: 'DragonTrunkCargo';
  solar_array?: Maybe<Scalars['Int']>;
  unpressurized_cargo?: Maybe<Scalars['Boolean']>;
};

export type Force = {
  __typename?: 'Force';
  kN?: Maybe<Scalars['Float']>;
  lbf?: Maybe<Scalars['Float']>;
};

export type HistoriesResult = {
  __typename?: 'HistoriesResult';
  data?: Maybe<Array<Maybe<History>>>;
  result?: Maybe<Result>;
};

export type History = {
  __typename?: 'History';
  details?: Maybe<Scalars['String']>;
  event_date_unix?: Maybe<Scalars['Date']>;
  event_date_utc?: Maybe<Scalars['Date']>;
  flight?: Maybe<Launch>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Link>;
  title?: Maybe<Scalars['String']>;
};

export type HistoryFind = {
  end?: InputMaybe<Scalars['Date']>;
  flight_number?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  start?: InputMaybe<Scalars['Date']>;
};

export type Info = {
  __typename?: 'Info';
  ceo?: Maybe<Scalars['String']>;
  coo?: Maybe<Scalars['String']>;
  cto?: Maybe<Scalars['String']>;
  cto_propulsion?: Maybe<Scalars['String']>;
  employees?: Maybe<Scalars['Int']>;
  founded?: Maybe<Scalars['Int']>;
  founder?: Maybe<Scalars['String']>;
  headquarters?: Maybe<Address>;
  launch_sites?: Maybe<Scalars['Int']>;
  links?: Maybe<InfoLinks>;
  name?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  test_sites?: Maybe<Scalars['Int']>;
  valuation?: Maybe<Scalars['Float']>;
  vehicles?: Maybe<Scalars['Int']>;
};

export type InfoLinks = {
  __typename?: 'InfoLinks';
  elon_twitter?: Maybe<Scalars['String']>;
  flickr?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type Landpad = {
  __typename?: 'Landpad';
  attempted_landings?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  landing_type?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  status?: Maybe<Scalars['String']>;
  successful_landings?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type Launch = {
  __typename?: 'Launch';
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  is_tentative?: Maybe<Scalars['Boolean']>;
  launch_date_local?: Maybe<Scalars['Date']>;
  launch_date_unix?: Maybe<Scalars['Date']>;
  launch_date_utc?: Maybe<Scalars['Date']>;
  launch_site?: Maybe<LaunchSite>;
  launch_success?: Maybe<Scalars['Boolean']>;
  launch_year?: Maybe<Scalars['String']>;
  links?: Maybe<LaunchLinks>;
  mission_id?: Maybe<Array<Maybe<Scalars['String']>>>;
  mission_name?: Maybe<Scalars['String']>;
  rocket?: Maybe<LaunchRocket>;
  ships?: Maybe<Array<Maybe<Ship>>>;
  static_fire_date_unix?: Maybe<Scalars['Date']>;
  static_fire_date_utc?: Maybe<Scalars['Date']>;
  telemetry?: Maybe<LaunchTelemetry>;
  tentative_max_precision?: Maybe<Scalars['String']>;
  upcoming?: Maybe<Scalars['Boolean']>;
};

export type LaunchFind = {
  apoapsis_km?: InputMaybe<Scalars['Float']>;
  block?: InputMaybe<Scalars['Int']>;
  cap_serial?: InputMaybe<Scalars['String']>;
  capsule_reuse?: InputMaybe<Scalars['String']>;
  core_flight?: InputMaybe<Scalars['Int']>;
  core_reuse?: InputMaybe<Scalars['String']>;
  core_serial?: InputMaybe<Scalars['String']>;
  customer?: InputMaybe<Scalars['String']>;
  eccentricity?: InputMaybe<Scalars['Float']>;
  end?: InputMaybe<Scalars['Date']>;
  epoch?: InputMaybe<Scalars['Date']>;
  fairings_recovered?: InputMaybe<Scalars['String']>;
  fairings_recovery_attempt?: InputMaybe<Scalars['String']>;
  fairings_reuse?: InputMaybe<Scalars['String']>;
  fairings_reused?: InputMaybe<Scalars['String']>;
  fairings_ship?: InputMaybe<Scalars['String']>;
  gridfins?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  inclination_deg?: InputMaybe<Scalars['Float']>;
  land_success?: InputMaybe<Scalars['String']>;
  landing_intent?: InputMaybe<Scalars['String']>;
  landing_type?: InputMaybe<Scalars['String']>;
  landing_vehicle?: InputMaybe<Scalars['String']>;
  launch_date_local?: InputMaybe<Scalars['Date']>;
  launch_date_utc?: InputMaybe<Scalars['Date']>;
  launch_success?: InputMaybe<Scalars['String']>;
  launch_year?: InputMaybe<Scalars['String']>;
  legs?: InputMaybe<Scalars['String']>;
  lifespan_years?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  mean_motion?: InputMaybe<Scalars['Float']>;
  mission_id?: InputMaybe<Scalars['String']>;
  mission_name?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  norad_id?: InputMaybe<Scalars['Int']>;
  orbit?: InputMaybe<Scalars['String']>;
  payload_id?: InputMaybe<Scalars['String']>;
  payload_type?: InputMaybe<Scalars['String']>;
  periapsis_km?: InputMaybe<Scalars['Float']>;
  period_min?: InputMaybe<Scalars['Float']>;
  raan?: InputMaybe<Scalars['Float']>;
  reference_system?: InputMaybe<Scalars['String']>;
  regime?: InputMaybe<Scalars['String']>;
  reused?: InputMaybe<Scalars['String']>;
  rocket_id?: InputMaybe<Scalars['String']>;
  rocket_name?: InputMaybe<Scalars['String']>;
  rocket_type?: InputMaybe<Scalars['String']>;
  second_stage_block?: InputMaybe<Scalars['String']>;
  semi_major_axis_km?: InputMaybe<Scalars['Float']>;
  ship?: InputMaybe<Scalars['String']>;
  side_core1_reuse?: InputMaybe<Scalars['String']>;
  side_core2_reuse?: InputMaybe<Scalars['String']>;
  site_id?: InputMaybe<Scalars['String']>;
  site_name?: InputMaybe<Scalars['String']>;
  site_name_long?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Date']>;
  tbd?: InputMaybe<Scalars['String']>;
  tentative?: InputMaybe<Scalars['String']>;
  tentative_max_precision?: InputMaybe<Scalars['String']>;
};

export type LaunchLinks = {
  __typename?: 'LaunchLinks';
  article_link?: Maybe<Scalars['String']>;
  flickr_images?: Maybe<Array<Maybe<Scalars['String']>>>;
  mission_patch?: Maybe<Scalars['String']>;
  mission_patch_small?: Maybe<Scalars['String']>;
  presskit?: Maybe<Scalars['String']>;
  reddit_campaign?: Maybe<Scalars['String']>;
  reddit_launch?: Maybe<Scalars['String']>;
  reddit_media?: Maybe<Scalars['String']>;
  reddit_recovery?: Maybe<Scalars['String']>;
  video_link?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type LaunchRocket = {
  __typename?: 'LaunchRocket';
  fairings?: Maybe<LaunchRocketFairings>;
  first_stage?: Maybe<LaunchRocketFirstStage>;
  rocket?: Maybe<Rocket>;
  rocket_name?: Maybe<Scalars['String']>;
  rocket_type?: Maybe<Scalars['String']>;
  second_stage?: Maybe<LaunchRocketSecondStage>;
};

export type LaunchRocketFairings = {
  __typename?: 'LaunchRocketFairings';
  recovered?: Maybe<Scalars['Boolean']>;
  recovery_attempt?: Maybe<Scalars['Boolean']>;
  reused?: Maybe<Scalars['Boolean']>;
  ship?: Maybe<Scalars['String']>;
};

export type LaunchRocketFirstStage = {
  __typename?: 'LaunchRocketFirstStage';
  cores?: Maybe<Array<Maybe<LaunchRocketFirstStageCore>>>;
};

export type LaunchRocketFirstStageCore = {
  __typename?: 'LaunchRocketFirstStageCore';
  block?: Maybe<Scalars['Int']>;
  core?: Maybe<Core>;
  flight?: Maybe<Scalars['Int']>;
  gridfins?: Maybe<Scalars['Boolean']>;
  land_success?: Maybe<Scalars['Boolean']>;
  landing_intent?: Maybe<Scalars['Boolean']>;
  landing_type?: Maybe<Scalars['String']>;
  landing_vehicle?: Maybe<Scalars['String']>;
  legs?: Maybe<Scalars['Boolean']>;
  reused?: Maybe<Scalars['Boolean']>;
};

export type LaunchRocketSecondStage = {
  __typename?: 'LaunchRocketSecondStage';
  block?: Maybe<Scalars['Int']>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
};

export type LaunchSite = {
  __typename?: 'LaunchSite';
  site_id?: Maybe<Scalars['String']>;
  site_name?: Maybe<Scalars['String']>;
  site_name_long?: Maybe<Scalars['String']>;
};

export type LaunchTelemetry = {
  __typename?: 'LaunchTelemetry';
  flight_club?: Maybe<Scalars['String']>;
};

export type LaunchesPastResult = {
  __typename?: 'LaunchesPastResult';
  data?: Maybe<Array<Maybe<Launch>>>;
  result?: Maybe<Result>;
};

export type Launchpad = {
  __typename?: 'Launchpad';
  attempted_launches?: Maybe<Scalars['Int']>;
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  location?: Maybe<Location>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  successful_launches?: Maybe<Scalars['Int']>;
  vehicles_launched?: Maybe<Array<Maybe<Rocket>>>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type Link = {
  __typename?: 'Link';
  article?: Maybe<Scalars['String']>;
  reddit?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type Location = {
  __typename?: 'Location';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
};

export type Mass = {
  __typename?: 'Mass';
  kg?: Maybe<Scalars['Int']>;
  lb?: Maybe<Scalars['Int']>;
};

export type Mission = {
  __typename?: 'Mission';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  manufacturers?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
  twitter?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type MissionResult = {
  __typename?: 'MissionResult';
  data?: Maybe<Array<Maybe<Mission>>>;
  result?: Maybe<Result>;
};

export type MissionsFind = {
  id?: InputMaybe<Scalars['ID']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  payload_id?: InputMaybe<Scalars['String']>;
};

export type Payload = {
  __typename?: 'Payload';
  customers?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  manufacturer?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  norad_id?: Maybe<Array<Maybe<Scalars['Int']>>>;
  orbit?: Maybe<Scalars['String']>;
  orbit_params?: Maybe<PayloadOrbitParams>;
  payload_mass_kg?: Maybe<Scalars['Float']>;
  payload_mass_lbs?: Maybe<Scalars['Float']>;
  payload_type?: Maybe<Scalars['String']>;
  reused?: Maybe<Scalars['Boolean']>;
};

export type PayloadOrbitParams = {
  __typename?: 'PayloadOrbitParams';
  apoapsis_km?: Maybe<Scalars['Float']>;
  arg_of_pericenter?: Maybe<Scalars['Float']>;
  eccentricity?: Maybe<Scalars['Float']>;
  epoch?: Maybe<Scalars['Date']>;
  inclination_deg?: Maybe<Scalars['Float']>;
  lifespan_years?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  mean_anomaly?: Maybe<Scalars['Float']>;
  mean_motion?: Maybe<Scalars['Float']>;
  periapsis_km?: Maybe<Scalars['Float']>;
  period_min?: Maybe<Scalars['Float']>;
  raan?: Maybe<Scalars['Float']>;
  reference_system?: Maybe<Scalars['String']>;
  regime?: Maybe<Scalars['String']>;
  semi_major_axis_km?: Maybe<Scalars['Float']>;
};

export type PayloadsFind = {
  apoapsis_km?: InputMaybe<Scalars['Float']>;
  customer?: InputMaybe<Scalars['String']>;
  eccentricity?: InputMaybe<Scalars['Float']>;
  epoch?: InputMaybe<Scalars['Date']>;
  inclination_deg?: InputMaybe<Scalars['Float']>;
  lifespan_years?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  mean_motion?: InputMaybe<Scalars['Float']>;
  nationality?: InputMaybe<Scalars['String']>;
  norad_id?: InputMaybe<Scalars['Int']>;
  orbit?: InputMaybe<Scalars['String']>;
  payload_id?: InputMaybe<Scalars['ID']>;
  payload_type?: InputMaybe<Scalars['String']>;
  periapsis_km?: InputMaybe<Scalars['Float']>;
  period_min?: InputMaybe<Scalars['Float']>;
  raan?: InputMaybe<Scalars['Float']>;
  reference_system?: InputMaybe<Scalars['String']>;
  regime?: InputMaybe<Scalars['String']>;
  reused?: InputMaybe<Scalars['Boolean']>;
  semi_major_axis_km?: InputMaybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  capsule?: Maybe<Capsule>;
  capsules?: Maybe<Array<Maybe<Capsule>>>;
  capsulesPast?: Maybe<Array<Maybe<Capsule>>>;
  capsulesUpcoming?: Maybe<Array<Maybe<Capsule>>>;
  company?: Maybe<Info>;
  core?: Maybe<Core>;
  cores?: Maybe<Array<Maybe<Core>>>;
  coresPast?: Maybe<Array<Maybe<Core>>>;
  coresUpcoming?: Maybe<Array<Maybe<Core>>>;
  dragon?: Maybe<Dragon>;
  dragons?: Maybe<Array<Maybe<Dragon>>>;
  histories?: Maybe<Array<Maybe<History>>>;
  historiesResult?: Maybe<HistoriesResult>;
  history?: Maybe<History>;
  landpad?: Maybe<Landpad>;
  landpads?: Maybe<Array<Maybe<Landpad>>>;
  launch?: Maybe<Launch>;
  launchLatest?: Maybe<Launch>;
  launchNext?: Maybe<Launch>;
  launches?: Maybe<Array<Maybe<Launch>>>;
  launchesPast?: Maybe<Array<Maybe<Launch>>>;
  launchesPastResult?: Maybe<LaunchesPastResult>;
  launchesUpcoming?: Maybe<Array<Maybe<Launch>>>;
  launchpad?: Maybe<Launchpad>;
  launchpads?: Maybe<Array<Maybe<Launchpad>>>;
  mission?: Maybe<Mission>;
  missions?: Maybe<Array<Maybe<Mission>>>;
  missionsResult?: Maybe<MissionResult>;
  payload?: Maybe<Payload>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
  roadster?: Maybe<Roadster>;
  rocket?: Maybe<Rocket>;
  rockets?: Maybe<Array<Maybe<Rocket>>>;
  rocketsResult?: Maybe<RocketsResult>;
  ship?: Maybe<Ship>;
  ships?: Maybe<Array<Maybe<Ship>>>;
  shipsResult?: Maybe<ShipsResult>;
};


export type QueryCapsuleArgs = {
  id: Scalars['ID'];
};


export type QueryCapsulesArgs = {
  find?: InputMaybe<CapsulesFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryCapsulesPastArgs = {
  find?: InputMaybe<CapsulesFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryCapsulesUpcomingArgs = {
  find?: InputMaybe<CapsulesFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryCoreArgs = {
  id: Scalars['ID'];
};


export type QueryCoresArgs = {
  find?: InputMaybe<CoresFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryCoresPastArgs = {
  find?: InputMaybe<CoresFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryCoresUpcomingArgs = {
  find?: InputMaybe<CoresFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryDragonArgs = {
  id: Scalars['ID'];
};


export type QueryDragonsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryHistoriesArgs = {
  find?: InputMaybe<HistoryFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryHistoriesResultArgs = {
  find?: InputMaybe<HistoryFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryHistoryArgs = {
  id: Scalars['ID'];
};


export type QueryLandpadArgs = {
  id: Scalars['ID'];
};


export type QueryLandpadsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryLaunchArgs = {
  id: Scalars['ID'];
};


export type QueryLaunchLatestArgs = {
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryLaunchNextArgs = {
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryLaunchesArgs = {
  find?: InputMaybe<LaunchFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryLaunchesPastArgs = {
  find?: InputMaybe<LaunchFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryLaunchesPastResultArgs = {
  find?: InputMaybe<LaunchFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryLaunchesUpcomingArgs = {
  find?: InputMaybe<LaunchFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryLaunchpadArgs = {
  id: Scalars['ID'];
};


export type QueryLaunchpadsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryMissionArgs = {
  id: Scalars['ID'];
};


export type QueryMissionsArgs = {
  find?: InputMaybe<MissionsFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryMissionsResultArgs = {
  find?: InputMaybe<MissionsFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryPayloadArgs = {
  id: Scalars['ID'];
};


export type QueryPayloadsArgs = {
  find?: InputMaybe<PayloadsFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryRocketArgs = {
  id: Scalars['ID'];
};


export type QueryRocketsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryRocketsResultArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryShipArgs = {
  id: Scalars['ID'];
};


export type QueryShipsArgs = {
  find?: InputMaybe<ShipsFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryShipsResultArgs = {
  find?: InputMaybe<ShipsFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type Result = {
  __typename?: 'Result';
  totalCount?: Maybe<Scalars['Int']>;
};

export type Roadster = {
  __typename?: 'Roadster';
  apoapsis_au?: Maybe<Scalars['Float']>;
  details?: Maybe<Scalars['String']>;
  earth_distance_km?: Maybe<Scalars['Float']>;
  earth_distance_mi?: Maybe<Scalars['Float']>;
  eccentricity?: Maybe<Scalars['Float']>;
  epoch_jd?: Maybe<Scalars['Float']>;
  inclination?: Maybe<Scalars['Float']>;
  launch_date_unix?: Maybe<Scalars['Date']>;
  launch_date_utc?: Maybe<Scalars['Date']>;
  launch_mass_kg?: Maybe<Scalars['Int']>;
  launch_mass_lbs?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Float']>;
  mars_distance_km?: Maybe<Scalars['Float']>;
  mars_distance_mi?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  norad_id?: Maybe<Scalars['Int']>;
  orbit_type?: Maybe<Scalars['Float']>;
  periapsis_arg?: Maybe<Scalars['Float']>;
  periapsis_au?: Maybe<Scalars['Float']>;
  period_days?: Maybe<Scalars['Float']>;
  semi_major_axis_au?: Maybe<Scalars['Float']>;
  speed_kph?: Maybe<Scalars['Float']>;
  speed_mph?: Maybe<Scalars['Float']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type Rocket = {
  __typename?: 'Rocket';
  active?: Maybe<Scalars['Boolean']>;
  boosters?: Maybe<Scalars['Int']>;
  company?: Maybe<Scalars['String']>;
  cost_per_launch?: Maybe<Scalars['Int']>;
  country?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  diameter?: Maybe<Distance>;
  engines?: Maybe<RocketEngines>;
  first_flight?: Maybe<Scalars['Date']>;
  first_stage?: Maybe<RocketFirstStage>;
  height?: Maybe<Distance>;
  id?: Maybe<Scalars['ID']>;
  landing_legs?: Maybe<RocketLandingLegs>;
  mass?: Maybe<Mass>;
  name?: Maybe<Scalars['String']>;
  payload_weights?: Maybe<Array<Maybe<RocketPayloadWeight>>>;
  second_stage?: Maybe<RocketSecondStage>;
  stages?: Maybe<Scalars['Int']>;
  success_rate_pct?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type RocketEngines = {
  __typename?: 'RocketEngines';
  engine_loss_max?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  propellant_1?: Maybe<Scalars['String']>;
  propellant_2?: Maybe<Scalars['String']>;
  thrust_sea_level?: Maybe<Force>;
  thrust_to_weight?: Maybe<Scalars['Float']>;
  thrust_vacuum?: Maybe<Force>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type RocketFirstStage = {
  __typename?: 'RocketFirstStage';
  burn_time_sec?: Maybe<Scalars['Int']>;
  engines?: Maybe<Scalars['Int']>;
  fuel_amount_tons?: Maybe<Scalars['Float']>;
  reusable?: Maybe<Scalars['Boolean']>;
  thrust_sea_level?: Maybe<Force>;
  thrust_vacuum?: Maybe<Force>;
};

export type RocketLandingLegs = {
  __typename?: 'RocketLandingLegs';
  material?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
};

export type RocketPayloadWeight = {
  __typename?: 'RocketPayloadWeight';
  id?: Maybe<Scalars['String']>;
  kg?: Maybe<Scalars['Int']>;
  lb?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type RocketSecondStage = {
  __typename?: 'RocketSecondStage';
  burn_time_sec?: Maybe<Scalars['Int']>;
  engines?: Maybe<Scalars['Int']>;
  fuel_amount_tons?: Maybe<Scalars['Float']>;
  payloads?: Maybe<RocketSecondStagePayloads>;
  thrust?: Maybe<Force>;
};

export type RocketSecondStagePayloadCompositeFairing = {
  __typename?: 'RocketSecondStagePayloadCompositeFairing';
  diameter?: Maybe<Distance>;
  height?: Maybe<Distance>;
};

export type RocketSecondStagePayloads = {
  __typename?: 'RocketSecondStagePayloads';
  composite_fairing?: Maybe<RocketSecondStagePayloadCompositeFairing>;
  option_1?: Maybe<Scalars['String']>;
};

export type RocketsResult = {
  __typename?: 'RocketsResult';
  data?: Maybe<Array<Maybe<Rocket>>>;
  result?: Maybe<Result>;
};

export type Ship = {
  __typename?: 'Ship';
  abs?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  attempted_landings?: Maybe<Scalars['Int']>;
  class?: Maybe<Scalars['Int']>;
  course_deg?: Maybe<Scalars['Int']>;
  home_port?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  imo?: Maybe<Scalars['Int']>;
  missions?: Maybe<Array<Maybe<ShipMission>>>;
  mmsi?: Maybe<Scalars['Int']>;
  model?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<ShipLocation>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  speed_kn?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  successful_landings?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  weight_kg?: Maybe<Scalars['Int']>;
  weight_lbs?: Maybe<Scalars['Int']>;
  year_built?: Maybe<Scalars['Int']>;
};

export type ShipLocation = {
  __typename?: 'ShipLocation';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type ShipMission = {
  __typename?: 'ShipMission';
  flight?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ShipsFind = {
  abs?: InputMaybe<Scalars['Int']>;
  active?: InputMaybe<Scalars['Boolean']>;
  attempted_landings?: InputMaybe<Scalars['Int']>;
  class?: InputMaybe<Scalars['Int']>;
  course_deg?: InputMaybe<Scalars['Int']>;
  home_port?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  imo?: InputMaybe<Scalars['Int']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  mission?: InputMaybe<Scalars['String']>;
  mmsi?: InputMaybe<Scalars['Int']>;
  model?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  speed_kn?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  successful_landings?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
  weight_kg?: InputMaybe<Scalars['Int']>;
  weight_lbs?: InputMaybe<Scalars['Int']>;
  year_built?: InputMaybe<Scalars['Int']>;
};

export type ShipsResult = {
  __typename?: 'ShipsResult';
  data?: Maybe<Array<Maybe<Ship>>>;
  result?: Maybe<Result>;
};

export type Volume = {
  __typename?: 'Volume';
  cubic_feet?: Maybe<Scalars['Int']>;
  cubic_meters?: Maybe<Scalars['Int']>;
};

export type LaunchDetailsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type LaunchDetailsQuery = { __typename?: 'Query', launch?: { __typename?: 'Launch', mission_name?: string | null, launch_date_local?: any | null, details?: string | null, id?: string | null, launch_site?: { __typename?: 'LaunchSite', site_name_long?: string | null } | null, rocket?: { __typename?: 'LaunchRocket', rocket_name?: string | null, rocket_type?: string | null, rocket?: { __typename?: 'Rocket', description?: string | null, diameter?: { __typename?: 'Distance', meters?: number | null } | null, height?: { __typename?: 'Distance', meters?: number | null } | null } | null } | null, links?: { __typename?: 'LaunchLinks', article_link?: string | null, video_link?: string | null, wikipedia?: string | null, flickr_images?: Array<string | null> | null, mission_patch?: string | null } | null } | null };

export type LaunchesListQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type LaunchesListQuery = { __typename?: 'Query', launchesPast?: Array<{ __typename?: 'Launch', mission_name?: string | null, launch_date_local?: any | null, id?: string | null, launch_site?: { __typename?: 'LaunchSite', site_name_long?: string | null } | null, links?: { __typename?: 'LaunchLinks', flickr_images?: Array<string | null> | null, mission_patch?: string | null } | null, rocket?: { __typename?: 'LaunchRocket', rocket_name?: string | null } | null } | null> | null };

import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": null,
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "Address",
        "fields": [
          {
            "name": "address",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "city",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "state",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Capsule",
        "fields": [
          {
            "name": "dragon",
            "type": {
              "kind": "OBJECT",
              "name": "Dragon",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "landings",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "missions",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "CapsuleMission",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "original_launch",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "reuse_count",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CapsuleMission",
        "fields": [
          {
            "name": "flight",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Core",
        "fields": [
          {
            "name": "asds_attempts",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "asds_landings",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "block",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "missions",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "CapsuleMission",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "original_launch",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "reuse_count",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "rtls_attempts",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "rtls_landings",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "water_landing",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CoreMission",
        "fields": [
          {
            "name": "flight",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Distance",
        "fields": [
          {
            "name": "feet",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "meters",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Dragon",
        "fields": [
          {
            "name": "active",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "crew_capacity",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "diameter",
            "type": {
              "kind": "OBJECT",
              "name": "Distance",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "dry_mass_kg",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dry_mass_lb",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "first_flight",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "heat_shield",
            "type": {
              "kind": "OBJECT",
              "name": "DragonHeatShield",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "height_w_trunk",
            "type": {
              "kind": "OBJECT",
              "name": "Distance",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "launch_payload_mass",
            "type": {
              "kind": "OBJECT",
              "name": "Mass",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "launch_payload_vol",
            "type": {
              "kind": "OBJECT",
              "name": "Volume",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "orbit_duration_yr",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pressurized_capsule",
            "type": {
              "kind": "OBJECT",
              "name": "DragonPressurizedCapsule",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "return_payload_mass",
            "type": {
              "kind": "OBJECT",
              "name": "Mass",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "return_payload_vol",
            "type": {
              "kind": "OBJECT",
              "name": "Volume",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sidewall_angle_deg",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "thrusters",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "DragonThrust",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "trunk",
            "type": {
              "kind": "OBJECT",
              "name": "DragonTrunk",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "wikipedia",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "DragonHeatShield",
        "fields": [
          {
            "name": "dev_partner",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "material",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "size_meters",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "temp_degrees",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "DragonPressurizedCapsule",
        "fields": [
          {
            "name": "payload_volume",
            "type": {
              "kind": "OBJECT",
              "name": "Volume",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "DragonThrust",
        "fields": [
          {
            "name": "amount",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "fuel_1",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "fuel_2",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pods",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "thrust",
            "type": {
              "kind": "OBJECT",
              "name": "Force",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "DragonTrunk",
        "fields": [
          {
            "name": "cargo",
            "type": {
              "kind": "OBJECT",
              "name": "DragonTrunkCargo",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "trunk_volume",
            "type": {
              "kind": "OBJECT",
              "name": "Volume",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "DragonTrunkCargo",
        "fields": [
          {
            "name": "solar_array",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "unpressurized_cargo",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Force",
        "fields": [
          {
            "name": "kN",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "lbf",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "HistoriesResult",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "History",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "result",
            "type": {
              "kind": "OBJECT",
              "name": "Result",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "History",
        "fields": [
          {
            "name": "details",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "event_date_unix",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "event_date_utc",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "flight",
            "type": {
              "kind": "OBJECT",
              "name": "Launch",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "links",
            "type": {
              "kind": "OBJECT",
              "name": "Link",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Info",
        "fields": [
          {
            "name": "ceo",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "coo",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "cto",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "cto_propulsion",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "employees",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "founded",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "founder",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "headquarters",
            "type": {
              "kind": "OBJECT",
              "name": "Address",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "launch_sites",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "links",
            "type": {
              "kind": "OBJECT",
              "name": "InfoLinks",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "summary",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "test_sites",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "valuation",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "vehicles",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "InfoLinks",
        "fields": [
          {
            "name": "elon_twitter",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "flickr",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "twitter",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "website",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Landpad",
        "fields": [
          {
            "name": "attempted_landings",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "details",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "full_name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "landing_type",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "location",
            "type": {
              "kind": "OBJECT",
              "name": "Location",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "successful_landings",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "wikipedia",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Launch",
        "fields": [
          {
            "name": "details",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "is_tentative",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "launch_date_local",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "launch_date_unix",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "launch_date_utc",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "launch_site",
            "type": {
              "kind": "OBJECT",
              "name": "LaunchSite",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "launch_success",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "launch_year",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "links",
            "type": {
              "kind": "OBJECT",
              "name": "LaunchLinks",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "mission_id",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "mission_name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "rocket",
            "type": {
              "kind": "OBJECT",
              "name": "LaunchRocket",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "ships",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Ship",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "static_fire_date_unix",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "static_fire_date_utc",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "telemetry",
            "type": {
              "kind": "OBJECT",
              "name": "LaunchTelemetry",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "tentative_max_precision",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "upcoming",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "LaunchLinks",
        "fields": [
          {
            "name": "article_link",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "flickr_images",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "mission_patch",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "mission_patch_small",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "presskit",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "reddit_campaign",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "reddit_launch",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "reddit_media",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "reddit_recovery",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "video_link",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "wikipedia",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "LaunchRocket",
        "fields": [
          {
            "name": "fairings",
            "type": {
              "kind": "OBJECT",
              "name": "LaunchRocketFairings",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "first_stage",
            "type": {
              "kind": "OBJECT",
              "name": "LaunchRocketFirstStage",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "rocket",
            "type": {
              "kind": "OBJECT",
              "name": "Rocket",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "rocket_name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "rocket_type",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "second_stage",
            "type": {
              "kind": "OBJECT",
              "name": "LaunchRocketSecondStage",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "LaunchRocketFairings",
        "fields": [
          {
            "name": "recovered",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "recovery_attempt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "reused",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ship",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "LaunchRocketFirstStage",
        "fields": [
          {
            "name": "cores",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "LaunchRocketFirstStageCore",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "LaunchRocketFirstStageCore",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "core",
            "type": {
              "kind": "OBJECT",
              "name": "Core",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "flight",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "gridfins",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "land_success",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "landing_intent",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "landing_type",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "landing_vehicle",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "legs",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "reused",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "LaunchRocketSecondStage",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "payloads",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Payload",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "LaunchSite",
        "fields": [
          {
            "name": "site_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "site_name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "site_name_long",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "LaunchTelemetry",
        "fields": [
          {
            "name": "flight_club",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "LaunchesPastResult",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Launch",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "result",
            "type": {
              "kind": "OBJECT",
              "name": "Result",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Launchpad",
        "fields": [
          {
            "name": "attempted_launches",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "details",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "location",
            "type": {
              "kind": "OBJECT",
              "name": "Location",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "successful_launches",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "vehicles_launched",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Rocket",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "wikipedia",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Link",
        "fields": [
          {
            "name": "article",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "reddit",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "wikipedia",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Location",
        "fields": [
          {
            "name": "latitude",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "longitude",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "region",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Mass",
        "fields": [
          {
            "name": "kg",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "lb",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Mission",
        "fields": [
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "manufacturers",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "payloads",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Payload",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "twitter",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "website",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "wikipedia",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "MissionResult",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Mission",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "result",
            "type": {
              "kind": "OBJECT",
              "name": "Result",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Payload",
        "fields": [
          {
            "name": "customers",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "manufacturer",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "nationality",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "norad_id",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "orbit",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "orbit_params",
            "type": {
              "kind": "OBJECT",
              "name": "PayloadOrbitParams",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "payload_mass_kg",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "payload_mass_lbs",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "payload_type",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "reused",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PayloadOrbitParams",
        "fields": [
          {
            "name": "apoapsis_km",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "arg_of_pericenter",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "eccentricity",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "epoch",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "inclination_deg",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "lifespan_years",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "longitude",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "mean_anomaly",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "mean_motion",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "periapsis_km",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "period_min",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "raan",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "reference_system",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "regime",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "semi_major_axis_km",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "capsule",
            "type": {
              "kind": "OBJECT",
              "name": "Capsule",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "capsules",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Capsule",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "find",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "capsulesPast",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Capsule",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "find",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "capsulesUpcoming",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Capsule",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "find",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "company",
            "type": {
              "kind": "OBJECT",
              "name": "Info",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "core",
            "type": {
              "kind": "OBJECT",
              "name": "Core",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "cores",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Core",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "find",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "coresPast",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Core",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "find",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "coresUpcoming",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Core",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "find",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "dragon",
            "type": {
              "kind": "OBJECT",
              "name": "Dragon",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "dragons",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Dragon",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "histories",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "History",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "find",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "historiesResult",
            "type": {
              "kind": "OBJECT",
              "name": "HistoriesResult",
              "ofType": null
            },
            "args": [
              {
                "name": "find",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "history",
            "type": {
              "kind": "OBJECT",
              "name": "History",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "landpad",
            "type": {
              "kind": "OBJECT",
              "name": "Landpad",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "landpads",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Landpad",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "launch",
            "type": {
              "kind": "OBJECT",
              "name": "Launch",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "launchLatest",
            "type": {
              "kind": "OBJECT",
              "name": "Launch",
              "ofType": null
            },
            "args": [
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "launchNext",
            "type": {
              "kind": "OBJECT",
              "name": "Launch",
              "ofType": null
            },
            "args": [
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "launches",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Launch",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "find",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "launchesPast",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Launch",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "find",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "launchesPastResult",
            "type": {
              "kind": "OBJECT",
              "name": "LaunchesPastResult",
              "ofType": null
            },
            "args": [
              {
                "name": "find",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "launchesUpcoming",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Launch",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "find",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "launchpad",
            "type": {
              "kind": "OBJECT",
              "name": "Launchpad",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "launchpads",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Launchpad",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "mission",
            "type": {
              "kind": "OBJECT",
              "name": "Mission",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "missions",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Mission",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "find",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "missionsResult",
            "type": {
              "kind": "OBJECT",
              "name": "MissionResult",
              "ofType": null
            },
            "args": [
              {
                "name": "find",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "payload",
            "type": {
              "kind": "OBJECT",
              "name": "Payload",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "payloads",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Payload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "find",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "roadster",
            "type": {
              "kind": "OBJECT",
              "name": "Roadster",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "rocket",
            "type": {
              "kind": "OBJECT",
              "name": "Rocket",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "rockets",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Rocket",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "rocketsResult",
            "type": {
              "kind": "OBJECT",
              "name": "RocketsResult",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "ship",
            "type": {
              "kind": "OBJECT",
              "name": "Ship",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "ships",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Ship",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "find",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "shipsResult",
            "type": {
              "kind": "OBJECT",
              "name": "ShipsResult",
              "ofType": null
            },
            "args": [
              {
                "name": "find",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Result",
        "fields": [
          {
            "name": "totalCount",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Roadster",
        "fields": [
          {
            "name": "apoapsis_au",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "details",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "earth_distance_km",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "earth_distance_mi",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "eccentricity",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "epoch_jd",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "inclination",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "launch_date_unix",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "launch_date_utc",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "launch_mass_kg",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "launch_mass_lbs",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "longitude",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "mars_distance_km",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "mars_distance_mi",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "norad_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "orbit_type",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "periapsis_arg",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "periapsis_au",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "period_days",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "semi_major_axis_au",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "speed_kph",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "speed_mph",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "wikipedia",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Rocket",
        "fields": [
          {
            "name": "active",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "boosters",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "company",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "cost_per_launch",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "country",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "diameter",
            "type": {
              "kind": "OBJECT",
              "name": "Distance",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "engines",
            "type": {
              "kind": "OBJECT",
              "name": "RocketEngines",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "first_flight",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "first_stage",
            "type": {
              "kind": "OBJECT",
              "name": "RocketFirstStage",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "height",
            "type": {
              "kind": "OBJECT",
              "name": "Distance",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "landing_legs",
            "type": {
              "kind": "OBJECT",
              "name": "RocketLandingLegs",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "mass",
            "type": {
              "kind": "OBJECT",
              "name": "Mass",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "payload_weights",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "RocketPayloadWeight",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "second_stage",
            "type": {
              "kind": "OBJECT",
              "name": "RocketSecondStage",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stages",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "success_rate_pct",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "wikipedia",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RocketEngines",
        "fields": [
          {
            "name": "engine_loss_max",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "layout",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "number",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "propellant_1",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "propellant_2",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "thrust_sea_level",
            "type": {
              "kind": "OBJECT",
              "name": "Force",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "thrust_to_weight",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "thrust_vacuum",
            "type": {
              "kind": "OBJECT",
              "name": "Force",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "version",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RocketFirstStage",
        "fields": [
          {
            "name": "burn_time_sec",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "engines",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "fuel_amount_tons",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "reusable",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "thrust_sea_level",
            "type": {
              "kind": "OBJECT",
              "name": "Force",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "thrust_vacuum",
            "type": {
              "kind": "OBJECT",
              "name": "Force",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RocketLandingLegs",
        "fields": [
          {
            "name": "material",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "number",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RocketPayloadWeight",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "kg",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "lb",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RocketSecondStage",
        "fields": [
          {
            "name": "burn_time_sec",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "engines",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "fuel_amount_tons",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "payloads",
            "type": {
              "kind": "OBJECT",
              "name": "RocketSecondStagePayloads",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "thrust",
            "type": {
              "kind": "OBJECT",
              "name": "Force",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RocketSecondStagePayloadCompositeFairing",
        "fields": [
          {
            "name": "diameter",
            "type": {
              "kind": "OBJECT",
              "name": "Distance",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "height",
            "type": {
              "kind": "OBJECT",
              "name": "Distance",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RocketSecondStagePayloads",
        "fields": [
          {
            "name": "composite_fairing",
            "type": {
              "kind": "OBJECT",
              "name": "RocketSecondStagePayloadCompositeFairing",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "option_1",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RocketsResult",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Rocket",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "result",
            "type": {
              "kind": "OBJECT",
              "name": "Result",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Ship",
        "fields": [
          {
            "name": "abs",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "active",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "attempted_landings",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "class",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "course_deg",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "home_port",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "image",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "imo",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "missions",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "ShipMission",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "mmsi",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "model",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "position",
            "type": {
              "kind": "OBJECT",
              "name": "ShipLocation",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "roles",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "speed_kn",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "successful_landings",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "url",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "weight_kg",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "weight_lbs",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "year_built",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ShipLocation",
        "fields": [
          {
            "name": "latitude",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "longitude",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ShipMission",
        "fields": [
          {
            "name": "flight",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ShipsResult",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Ship",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "result",
            "type": {
              "kind": "OBJECT",
              "name": "Result",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Volume",
        "fields": [
          {
            "name": "cubic_feet",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "cubic_meters",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;

export const LaunchDetailsDocument = gql`
    query launchDetails($id: ID!) {
  launch(id: $id) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    details
    id
    rocket {
      rocket_name
      rocket_type
      rocket {
        diameter {
          meters
        }
        description
        height {
          meters
        }
      }
    }
    links {
      article_link
      video_link
      wikipedia
      flickr_images
      mission_patch
    }
  }
}
    `;

export function useLaunchDetailsQuery(options: Omit<Urql.UseQueryArgs<LaunchDetailsQueryVariables>, 'query'>) {
  return Urql.useQuery<LaunchDetailsQuery, LaunchDetailsQueryVariables>({ query: LaunchDetailsDocument, ...options });
};
export const LaunchesListDocument = gql`
    query launchesList($limit: Int!) {
  launchesPast(limit: $limit) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      flickr_images
      mission_patch
    }
    rocket {
      rocket_name
    }
    id
  }
}
    `;

export function useLaunchesListQuery(options: Omit<Urql.UseQueryArgs<LaunchesListQueryVariables>, 'query'>) {
  return Urql.useQuery<LaunchesListQuery, LaunchesListQueryVariables>({ query: LaunchesListDocument, ...options });
};