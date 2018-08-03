///<reference path="../../node_modules/contentful/index.d.ts"/>
import { Injectable } from '@angular/core';
import {Asset, AssetCollection, createClient, Entry, EntryCollection} from 'contentful';
import { environment } from '../environments/environment';
import {Project} from './common/model/project';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() { }

  // private assets: Map<String, Asset> = new Map<String, Asset>();

  getProjects(query?: object): Promise<EntryCollection<any>> {
    return this.client.getEntries<any>(Object.assign({content_type: 'project'}, query))
      .then((res) => {
        // const arr = res.includes.Asset as Array<Asset>;
        // arr.forEach(asset => {
        //      this.assets.set(asset.sys.id, asset);
        // });
        return res;
      });
  }

  getProject(projectId): Promise<Entry<Project>> {

    return this.client.getEntries<Project>(Object.assign({
      content_type: 'project'
    }, {'sys.id': projectId}))
      .then(res => res.items[0]);

    // return this.client.getEntry(projectId).then(res => res);
  }

  getAssets(assetIds): Promise<Array<Asset>> {
    return this.client.getAssets({'sys.id[in]' : assetIds}).then(res => {
      return res.items;
    });
  }

  // getAssets(assetIds): Promise<Map<string, Asset>> {
  //   return this.client.getAssets({'sys.id[in]' : assetIds}).then(res => {
  //        const assets = new Map<string, Asset>();
  //        res.items.forEach(asset => {
  //           assets.set(asset.sys.id, asset);
  //        });
  //        return assets;
  //   });
  // }

  getAsset(assetId): Promise<Asset> {
    // if (this.assets.has(assetId)) {
    //   return Promise.resolve(this.assets.get(assetId));
    // }
    return this.client.getAsset(assetId).then(res => res);
  }

}

const MOCK = '{' +
  '  "sys": {' +
  '    "type": "Array"' +
  '  },' +
  '  "total": 1,' +
  '  "skip": 0,' +
  '  "limit": 100,' +
  '  "items": [' +
  '    {' +
  '      "sys": {' +
  '        "space": {' +
  '          "sys": {' +
  '            "type": "Link",' +
  '            "linkType": "Space",' +
  '            "id": "w2yo5lfogfyk"' +
  '          }' +
  '        },' +
  '        "id": "35RZ911daECC0cCiEM4USc",' +
  '        "type": "Entry",' +
  '        "createdAt": "2018-07-27T18:07:44.181Z",' +
  '        "updatedAt": "2018-07-27T18:07:44.181Z",' +
  '        "environment": {' +
  '          "sys": {' +
  '            "id": "master",' +
  '            "type": "Link",' +
  '            "linkType": "Environment"' +
  '          }' +
  '        },' +
  '        "revision": 1,' +
  '        "contentType": {' +
  '          "sys": {' +
  '            "type": "Link",' +
  '            "linkType": "ContentType",' +
  '            "id": "project"' +
  '          }' +
  '        },' +
  '        "locale": "en-US"' +
  '      },' +
  '      "fields": {' +
  '        "title": "Interior Design",' +
  '        "subTitle": "Appartamento a Milano",' +
  '        "creationDate": "2018-07-18",' +
  '        "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",' +
  '        "images": [' +
  '          {' +
  '            "sys": {' +
  '              "type": "Link",' +
  '              "linkType": "Asset",' +
  '              "id": "2nZTkHtFa82EkKgkwqEQAa"' +
  '            }' +
  '          }' +
  '        ]' +
  '      }' +
  '    }' +
  '  ],' +
  '  "includes": {' +
  '    "Asset": [' +
  '      {' +
  '        "sys": {' +
  '          "space": {' +
  '            "sys": {' +
  '              "type": "Link",' +
  '              "linkType": "Space",' +
  '              "id": "w2yo5lfogfyk"' +
  '            }' +
  '          },' +
  '          "id": "2nZTkHtFa82EkKgkwqEQAa",' +
  '          "type": "Asset",' +
  '          "createdAt": "2018-07-27T18:06:45.960Z",' +
  '          "updatedAt": "2018-07-27T18:06:45.960Z",' +
  '          "environment": {' +
  '            "sys": {' +
  '              "id": "master",' +
  '              "type": "Link",' +
  '              "linkType": "Environment"' +
  '            }' +
  '          },' +
  '          "revision": 1,' +
  '          "locale": "en-US"' +
  '        },' +
  '        "fields": {' +
  '          "title": "amupi",' +
  '          "description": "<3",' +
  '          "file": {' +
  '            "url": "//images.ctfassets.net/w2yo5lfogfyk/2nZTkHtFa82EkKgkwqEQAa/a6d7663a59c6ffbe9611a8f405c4eb36/amupi.jpg",' +
  '            "details": {' +
  '              "size": 65326,' +
  '              "image": {' +
  '                "width": 960,' +
  '                "height": 610' +
  '              }' +
  '            },' +
  '            "fileName": "amupi.jpg",' +
  '            "contentType": "image/jpeg"' +
  '          }' +
  '        }' +
  '      }' +
  '    ]' +
  '  }' +
  '}';
