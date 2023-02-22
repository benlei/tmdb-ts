import { ChangeOptions, ExternalIds, Image, PeopleTranslations, PersonChanges, PersonCombinedCredits, PersonDetail, PersonMovieCredit, PersonTvShowCredit, PopularPersons, TaggedImages } from '../types';
import { BaseEndpoint } from './base';
import querystring from 'querystring';

const BASE_PERSON = '/person';


export class PeopleEndpoint extends BaseEndpoint {
	constructor(accessToken: string) {
		super(accessToken);
	}

	async details(id: number): Promise<PersonDetail> {
		return await this.api.get<PersonDetail>(`${BASE_PERSON}/${id}`);
	}

	async changes(id: number, options? : ChangeOptions): Promise<PersonChanges> {
		const params = querystring.encode(options);
		return await this.api.get<PersonChanges>(`${BASE_PERSON}/${id}/changes?${params}`);
	}

	async movieCredits(id: number): Promise<PersonMovieCredit> {
		return await this.api.get<PersonMovieCredit>(`${BASE_PERSON}/${id}/movie_credits`);
	}

	async tvShowCredits(id: number): Promise<PersonTvShowCredit> {
		return await this.api.get<PersonTvShowCredit>(`${BASE_PERSON}/${id}/tv_credits`);
	}

	async combinedCredits(id: number) : Promise<PersonCombinedCredits> {
		return await this.api.get<PersonCombinedCredits>(`${BASE_PERSON}/${id}/combined_credits`)
	}

	async externalId(id: number): Promise<ExternalIds>{
		return await this.api.get<ExternalIds>(`${BASE_PERSON}/${id}/external_ids`)
	}

	async images(id: number): Promise<{id: number, profiles: Image[]}>{
		return await this.api.get<{id: number, profiles: Image[]}>(`${BASE_PERSON}/${id}/images`)
	}

	async taggedImages(id: number, options?: {page?: number}): Promise<TaggedImages>{
		const params = querystring.encode(options);
		return await this.api.get<TaggedImages>(`${BASE_PERSON}/${id}/tagged_images?${params}`);
	}

	async translation(id: number) : Promise<PeopleTranslations>{
		return await this.api.get<PeopleTranslations>(`${BASE_PERSON}/${id}/translations`)
	}

	async latest(): Promise<PersonDetail>{
		return await this.api.get<PersonDetail>(`${BASE_PERSON}/latest`);
	}

	async popular(options?: {page?: number}): Promise<PopularPersons>{
		const params = querystring.encode(options);
		return await this.api.get<PopularPersons>(`${BASE_PERSON}/popular?${params}`);
	}
}