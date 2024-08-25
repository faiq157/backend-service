export type THttpResponse = {
  success: boolean;
  statusCode: number;
  request: {
    api?: string | null;
    method: string;
    url: string;
  };
  message: string;
  data: unknown;
};
export type THttperror = {
  success: boolean;
  statusCode: number;
  request: {
    ip: any;
    api?: string | null;
    method: string;
    url: string;
  };
  message: string;
  data: unknown;
  trace?: object | null;
};
