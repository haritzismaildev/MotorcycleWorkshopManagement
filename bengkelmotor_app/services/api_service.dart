import 'package:dio/dio.dart';

class ApiService {
  final Dio _dio = Dio(BaseOptions(baseUrl: 'https://api.yourdomain.com'));

  Future<void> registerUser(
    String username,
    String password,
    String role,
  ) async {
    await _dio.post(
      '/api/auth/register',
      data: {'username': username, 'password': password, 'role': role},
    );
  }
}
